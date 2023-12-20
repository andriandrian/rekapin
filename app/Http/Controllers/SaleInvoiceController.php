<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Product;
use App\Models\Sale;
use App\Models\SaleInvoice;
use App\Models\SaleInvoiceOrderLine;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SaleInvoiceController extends Controller
{
    public function index()
    {
        return Inertia::render('Sale/SaleInvoice', [
            'title' => 'Sale Invoice',
            'active' => 'invoice',
            'invoice' => SaleInvoice::paginate(10),
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
            Sale::where('id', $request->id)->update(['status' => 'Proceed']);

            DB::commit();

            return redirect()->route('invoice.index')->with(['message' => [
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
        return redirect()->route('invoice.index')->with(['message' => [
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
        return redirect()->route('sale');
    }
}
