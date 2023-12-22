<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\Sale;
use App\Models\SaleOrderLine;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SaleController extends Controller
{
    public function index(Request $request)
    {
        $startDate = $request->startDate ?? null;
        $endDate = $request->endDate ?? null;
        $status = $request->status ?? null;
        $search = $request->search ?? null;
        $customer = $request->customer ?? null;

        if ($search != null) {
            $sale = Sale::search($request->search)->orderBy('created_at', 'desc')
                ->query(fn (Builder $query) => $query->with('customer')->orderBy('created_at', 'desc'))
                ->paginate(10);
        } else if ($startDate && $endDate && $customer) {
            $sale = Sale::orderBy('created_at', 'desc')
                ->where('partner_id', $customer)
                ->whereBetween('date', [$startDate, $endDate])
                ->where('status', 'like', '%' . $status . '%')
                ->paginate(10);
        } else if ($startDate && $endDate) {
            $sale = Sale::orderBy('created_at', 'desc')
                ->whereBetween('date', [$startDate, $endDate])
                ->where('status', 'like', '%' . $status . '%')
                ->paginate(10);
        } else if ($customer) {
            $sale = Sale::orderBy('created_at', 'desc')
                ->where('partner_id', $customer)
                ->where('status', 'like', '%' . $status . '%')
                ->paginate(10);
        } else {
            $sale = Sale::orderBy('created_at', 'desc')
                ->where('status', 'like', '%' . $status . '%')
                ->paginate(10);
        }
        // dd($startDate);

        return Inertia::render('Sale/Sale', [
            'title' => 'Sale',
            'active' => 'sale',
            'customer' => Customer::all(),
            // 'sale' => Sale::search($request->search)->orderBy('date', 'asc')
            //     ->query(fn (Builder $query) => $query->with('customer')->orderBy('date', 'asc'))
            //     ->paginate(10),
            'sale' => $sale,

        ]);
    }

    public function create()
    {
        return Inertia::render('Sale/SaleCreate', [
            'title' => 'Sale Create',
            'active' => 'sale',
            'product' => Product::orderBy('name', 'asc')->get(),
            'customer' => Customer::orderBy('name', 'asc')->get(),
        ]);
    }

    public function store(Request $request)
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

        $messages = [
            'partner_id.required' => 'The customer field is required.',
        ];


        $request->validate($rules, $messages);

        DB::beginTransaction();

        try {
            $newSale = Sale::create([
                'partner_id' => $request->partner_id["value"],
                'date' => $request->date,
                'price_total' => $request->price_total,
                'memo' => $request->memo,
            ]);

            foreach ($request->products as $product) {
                SaleOrderLine::create([
                    'sale_id' => $newSale->id,
                    'product_id' => $product['value'],
                    'product_quantity' => $product['product_quantity'],
                    'discount' => $product['discount'],
                    'discount_percent' => $product['discount_percent'],
                    'subtotal' => $product['subtotal'],
                ]);

                $selectedProduct = Product::find($product['value']);
                $updatedStock = (int)$selectedProduct['available_stock'] - (int)$product['product_quantity'];
                Product::where('id', $product['value'])->update(['available_stock' => $updatedStock]);
            }

            DB::commit();

            return redirect()->route('sale')->with(['message' => [
                'type' => 'success',
                'text' => 'Sale created successfully.',
                'button' => 'OK!',
            ]]);
        } catch (\Exception $e) {
            DB::rollback();
            // dd($e->getMessage());

            return redirect()->back()->with('message', 'Sale failed to create.');
        }
    }

    public function edit(Sale $sale, Request $request)
    {
        // Mengambil data penjualan yang akan di-edit
        $saleToEdit = $sale->find($request->id);
        $customer = Customer::find($saleToEdit->partner_id);
        $customerFields = [
            'value' => $customer->id,
            'label' => $customer->name
        ];

        // Mengambil data detail penjualan (sale_order_lines) yang terkait dengan penjualan
        $saleOrderLines = SaleOrderLine::where('sale_id', $saleToEdit->id)->get();

        // add label, barcode_no, and batch_no to product
        foreach ($saleOrderLines as $saleOrderLine) {
            $product = Product::find($saleOrderLine->product_id);
            $saleOrderLine->label = $product->name;
            $saleOrderLine->barcode_no = $product->barcode_no;
            $saleOrderLine->batch_no = $product->batch_no;
            $saleOrderLine->default_code = $product->default_code;
            $saleOrderLine->discount_percent = $saleOrderLine->discount_percent;
            $saleOrderLine->price = $product->sale_price;
        }

        return Inertia::render('Sale/SaleEdit', [
            'active' => 'sale',
            'sale' => $saleToEdit,
            'partner' => $customerFields,
            'saleOrderLines' => $saleOrderLines,
            'product' => Product::orderBy('name', 'asc')->get(),
            'customer' => Customer::orderBy('name', 'asc')->get(),
        ]);
    }

    public function update(Request $request)
    {
        dd($request->all());
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
            $newSale = Sale::find($request->id)->update([
                'partner_id' => $request->partner_id['value'],
                'date' => $request->date,
                'price_total' => $request->price_total,
                'memo' => $request->memo,
            ]);

            $saleOrderLines = SaleOrderLine::where('sale_id', $request->id)->get();
            $products = $request->products;
            foreach ($saleOrderLines as $saleOrderLine) {
                $exists = false;
                foreach ($products as $product) {
                    if ($product['id'] == $saleOrderLine->id) {
                        $exists = true;
                        break;
                    }
                }

                // If the id doesn't exist in the products array, delete the saleOrderLine
                if (!$exists) {
                    $selectedProduct = Product::find($saleOrderLine->product_id);
                    $updatedStock = (int)$selectedProduct['available_stock'] + (int)$saleOrderLine->product_quantity;
                    Product::where('id', $saleOrderLine->product_id)->update(['available_stock' => $updatedStock]);
                    $saleOrderLine->delete();
                }
            }

            foreach ($request->products as $product) {
                $productId = $product['id'] ?? null;
                if ($productId) {
                    $saleOrderLine = SaleOrderLine::where('sale_id', $request->id)->where('id', $productId)->first();
                }
                if ($saleOrderLine == null) {
                    SaleOrderLine::create([
                        'sale_id' => $request->id,
                        'product_id' => $product['value'],
                        'product_quantity' => $product['product_quantity'],
                        'discount' => $product['discount'],
                        'discount_percent' => $product['discount_percent'],
                        'subtotal' => $product['subtotal'],
                    ]);

                    $selectedProduct = Product::find($product['value']);
                    $updatedStock = (int)$selectedProduct['available_stock'] - (int)$product['product_quantity'];
                    Product::where('id', $product['value'])->update(['available_stock' => $updatedStock]);
                } else {
                    if ($saleOrderLine->product_quantity != $product['product_quantity']) {
                        $selectedProduct = Product::where('id', $product['product_id'])->first();
                        $updatedStock = 0;
                        if ($saleOrderLine->product_quantity > $product['product_quantity']) {
                            $difference = (int)$saleOrderLine->product_quantity - (int)$product['product_quantity'];
                            $updatedStock = (int)$selectedProduct['available_stock'] + $difference;
                        } else {
                            $difference = (int)$product['product_quantity'] - (int)$saleOrderLine->product_quantity;
                            $updatedStock = (int)$selectedProduct['available_stock'] - $difference;
                        }
                        $selectedProduct->available_stock = $updatedStock;
                        $selectedProduct->save();
                    }

                    // $saleOrderLine->product_quantity = $product['product_quantity'];
                    $saleOrderLine->discount = $product['discount'];
                    $saleOrderLine->discount_percent = $product['discount_percent'];
                    $saleOrderLine->subtotal = $product['subtotal'];
                    $saleOrderLine->save();
                }
            }

            DB::commit();

            return redirect()->route('sale')->with('success', 'Sale created successfully.');
        } catch (\Exception $e) {
            DB::rollback();
            dd($e->getMessage());

            return redirect()->back()->with('error', 'Sale failed to create.');
        }

        // Sale::find($request->id)->update([
        //     'partner_id' => $request->partner_id,
        //     'date' => $request->date,
        //     'price_total' => $request->price_total,
        //     'memo' => $request->memo,
        // ]);

        return redirect()->route('sale');
    }

    public function destroy(Request $request)
    {
        Sale::find($request->id)->delete();
        return redirect()->route('sale');
    }
}
