<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Product;
use App\Models\Sale;
use App\Models\SaleInvoice;
use App\Models\SaleInvoiceOrderLine;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SaleInvoiceController extends Controller
{
    public function index(Request $request)
    {
        // dd($request->all());
        $startDate = $request->startDate ?? null;
        $endDate = $request->endDate ?? null;
        $status = $request->status ?? null;
        if ($status == 'all') {
            $status = null;
        }
        $search = $request->search ?? null;
        $customer = $request->customer ?? null;

        if ($search != null) {
            $invoice = SaleInvoice::search($request->search)->orderBy('date', 'desc')
                ->query(fn (Builder $query) => $query->with('customer')->orderBy('date', 'desc'))
                ->paginate(10);
        } else if ($startDate && $endDate && $customer && $status) {
            $invoice = SaleInvoice::orderBy('date', 'desc')
                ->where('partner_id', $customer)
                ->whereBetween('date', [$startDate, $endDate])
                ->where('status', $status)
                ->paginate(10);
        } else if ($startDate && $endDate && $status) {
            $invoice = SaleInvoice::orderBy('date', 'desc')
                ->whereBetween('date', [$startDate, $endDate])
                ->where('status', $status)
                ->paginate(10);
        } else if ($startDate && $endDate && $customer) {
            $invoice = SaleInvoice::orderBy('date', 'desc')
                ->where('partner_id', $customer)
                ->whereBetween('date', [$startDate, $endDate])
                ->paginate(10);
        } else if ($startDate && $endDate) {
            $invoice = SaleInvoice::orderBy('date', 'desc')
                ->whereBetween('date', [$startDate, $endDate])
                ->paginate(10);
        } else if ($status && $customer) {
            $invoice = SaleInvoice::orderBy('date', 'desc')
                ->where('partner_id', $customer)
                ->where('status', $status)
                ->paginate(10);
        } else if ($status) {
            $invoice = SaleInvoice::orderBy('date', 'desc')
                ->where('status', $status)
                ->paginate(10);
        } else if ($customer) {
            $invoice = SaleInvoice::orderBy('date', 'desc')
                ->where('partner_id', $customer)
                ->paginate(10);
        } else {
            $invoice = SaleInvoice::orderBy('date', 'desc')
                ->paginate(10);
        }

        return Inertia::render('Sale/SaleInvoice', [
            'title' => 'Sale Invoice',
            'active' => 'invoice',
            'customer' => Customer::all(),
            'invoice' => $invoice,
            // SaleInvoice::search($request->search)->orderBy('date', 'asc')
            //     ->paginate(10),
        ]);
    }

    public function create(Request $request)
    {
        $rules = [
            'partner_id' => 'required',
            'date' => 'required',
            'price_total' => 'required',
            'memo' => 'nullable',
            'products' => 'required|array',
            'products.*.value' => 'required|exists:products,id',
            'products.*.product_quantity' => 'required|integer|min:1',
            'products.*.discount' => 'nullable|integer|min:0',
            'products.*.discount_percent' => 'nullable|integer|min:0|max:100',
            'products.*.subtotal' => 'required|integer|min:0',
        ];

        // $messages = [
        //     'partner_id.required' => 'The customer field is required.',
        // ];


        // $request->validate($rules, $messages);

        DB::beginTransaction();

        try {
            $newSaleInvoice = SaleInvoice::create([
                'partner_id' => $request->partner_id["value"],
                'date' => $request->date,
                'price_total' => $request->price_total,
                'memo' => $request->memo,
            ]);

            foreach ($request->products as $product) {
                SaleInvoiceOrderLine::create([
                    'invoice_id' => $newSaleInvoice->id,
                    'product_id' => $product['product_id'],
                    'product_quantity' => $product['product_quantity'],
                    'discount' => $product['discount'],
                    'discount_percent' => $product['discount_percent'],
                    'subtotal' => $product['subtotal'],
                ]);

                // $selectedProduct = Product::find($product['value']);
                // $updatedStock = (int)$selectedProduct['available_stock'] - (int)$product['product_quantity'];
                // Product::where('id', $product['value'])->update(['available_stock' => $updatedStock]);
            }
            Sale::where('id', $request->id)->update(['status' => 'Proceeded']);

            DB::commit();

            return redirect()->route('invoice')->with(['message' => [
                'type' => 'success',
                'text' => 'Sale Invoice created successfully.',
                'button' => 'OK!',
            ]]);
        } catch (\Exception $e) {
            DB::rollback();
            // dd($e->getMessage());

            return redirect()->back()->with('error', 'Sale failed to create.');
        }
    }

    public function edit(SaleInvoice $saleInvoice, Request $request)
    {
        $saleInvoiceToEdit = $saleInvoice->find($request->id);
        $customer = Customer::find($saleInvoiceToEdit->partner_id);
        $customerFields = [
            'value' => $customer->id,
            'label' => $customer->name
        ];

        $saleOrderLines = SaleInvoiceOrderLine::where('invoice_id', $saleInvoiceToEdit->id)->get();

        foreach ($saleOrderLines as $saleOrderLine) {
            $product = Product::find($saleOrderLine->product_id);
            $saleOrderLine->label = $product->name;
            $saleOrderLine->barcode_no = $product->barcode_no;
            $saleOrderLine->batch_no = $product->batch_no;
            $saleOrderLine->default_code = $product->default_code;
            $saleOrderLine->discount_percent = $saleOrderLine->discount_percent;
            $saleOrderLine->price = $product->sale_price;
        }

        return Inertia::render('Sale/SaleInvoiceEdit', [
            'active' => 'invoice',
            'invoice' => $saleInvoiceToEdit,
            'partner' => $customerFields,
            'saleOrderLines' => $saleOrderLines,
            'product' => Product::all(),
            'customer' => Customer::all(),
        ]);
    }

    public function status(Request $request)
    {
        // dd($request->all());
        SaleInvoice::where('id', $request->id)->update(['status' => 'Finish']);
        return redirect()->route('invoice')->with(['message' => [
            'type' => 'success',
            'text' => 'Sale Invoice status updated successfully.',
            'button' => 'OK!',
        ]]);
    }

    public function destroy(Request $request)
    {
        SaleInvoice::find($request->id)->delete();
        // delete order line
        SaleInvoiceOrderLine::where('invoice_id', $request->id)->delete();
        return redirect()->route('invoice');
    }
}
