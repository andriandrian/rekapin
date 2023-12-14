<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Purchase;
use App\Models\PurchaseOrderLine;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PurchaseController extends Controller
{
    public function index()
    {
        return Inertia::render('Purchase/Purchase', [
            'title' => 'Purchase',
            'active' => 'purchase',
            'purchase' => Purchase::paginate(10),
        ]);
    }

    public function create()
    {
        return Inertia::render('Purchase/PurchaseCreate', [
            'title' => 'Purchase Create',
            'active' => 'purchase',
            'product' => Product::all(),
            'vendor' => Vendor::all(),
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());
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
            $newPurchase = Purchase::create([
                'partner_id' => $request->partner_id["value"],
                'date' => $request->date,
                'price_total' => $request->price_total,
                'memo' => $request->memo,
            ]);

            foreach ($request->products as $product) {
                PurchaseOrderLine::create([
                    'purchase_id' => $newPurchase->id,
                    'product_id' => $product['value'],
                    'product_quantity' => $product['product_quantity'],
                    'discount' => $product['discount'],
                    'discount_percent' => $product['discount_percent'],
                    'subtotal' => $product['subtotal'],
                ]);

                $selectedProduct = Product::find($product['value']);
                $updatedStock = (int)$selectedProduct['available_stock'] + (int)$product['product_quantity'];
                Product::where('id', $product['value'])->update(['available_stock' => $updatedStock]);
            }

            DB::commit();

            return redirect()->route('purchase.index')->with(['message' => [
                'type' => 'success',
                'text' => 'Purchase created successfully.',
                'button' => 'OK!',
            ]]);
        } catch (\Exception $e) {
            DB::rollback();
            dd($e->getMessage());

            // return redirect()->back()->with('error', 'Purchase failed to create.');
        }
    }

    public function edit(Purchase $purchase, Request $request)
    {
        // Mengambil data penjualan yang akan di-edit
        $purchaseToEdit = $purchase->find($request->id);
        $vendor = Vendor::find($purchaseToEdit->partner_id);
        $vendorFields = [
            'value' => $vendor->id,
            'label' => $vendor->name
        ];

        // Mengambil data detail penjualan (purchase_order_lines) yang terkait dengan penjualan
        $purchaseOrderLines = PurchaseOrderLine::where('purchase_id', $purchaseToEdit->id)->get();

        // add label, barcode_no, and batch_no to product
        foreach ($purchaseOrderLines as $purchaseOrderLine) {
            $product = Product::find($purchaseOrderLine->product_id);
            $purchaseOrderLine->label = $product->name;
            $purchaseOrderLine->barcode_no = $product->barcode_no;
            $purchaseOrderLine->batch_no = $product->batch_no;
            $purchaseOrderLine->default_code = $product->default_code;
            $purchaseOrderLine->discount_percent = $purchaseOrderLine->discount_percent;
            $purchaseOrderLine->price = $product->purchase_price;
        }

        return Inertia::render('Purchase/PurchaseEdit', [
            'active' => 'purchase',
            'purchase' => $purchaseToEdit,
            'partner' => $vendorFields,
            'purchaseOrderLines' => $purchaseOrderLines,
            'product' => Product::all(),
            'vendor' => Vendor::all(),
        ]);
    }

    public function update(Request $request)
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
            $newPurchase = Purchase::find($request->id)->update([
                'partner_id' => $request->partner_id["value"],
                'date' => $request->date,
                'price_total' => $request->price_total,
                'memo' => $request->memo,
            ]);

            foreach ($request->products as $product) {
                PurchaseOrderLine::find($product['id'])->update([
                    'purchase_id' => $newPurchase->id,
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

            return redirect()->route('purchase.index')->with('success', 'Purchase created successfully.');
        } catch (\Exception $e) {
            DB::rollback();
            // dd($e->getMessage());

            return redirect()->back()->with('error', 'Purchase failed to create.');
        }

        return redirect()->route('purchase.index');
    }

    public function destroy(Request $request)
    {
        Purchase::find($request->id)->delete();
        return redirect()->route('purchase.index');
    }
}
