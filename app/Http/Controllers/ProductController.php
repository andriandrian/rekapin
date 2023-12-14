<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::paginate(10);
        return Inertia::render('Inventory/Inventory', [
            'title' => 'Inventory',
            'active' => 'inventory',
            'product' => $products,
        ]);
    }

    public function create()
    {
        return Inertia::render('Inventory/InventoryCreate', [
            'title' => 'Inventory Create',
            'active' => 'inventory',
            'vendor' => Vendor::all(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'default_code' => 'required',
            'sale_price' => 'required',
            'purchase_price' => 'required',
            'barcode_no' => 'required',
            'batch_no' => 'required',
            'available_stock' => 'required',
            'vendor_id' => 'required',
            'uom' => 'required',
        ]);

        Product::create([
            'name' => $request->name,
            'default_code' => $request->default_code,
            'sale_price' => $request->sale_price,
            'purchase_price' => $request->purchase_price,
            'barcode_no' => $request->barcode_no,
            'batch_no' => $request->batch_no,
            'available_stock' => $request->available_stock,
            // 'vendor_id' => $request->vendor_id,
            'vendor_id' => $request->vendor_id['value'],
            'uom' => $request->uom,
        ]);

        return redirect()->route('product.index')->with(['message' => [
            'type' => 'success',
            'text' => 'Product created successfully.',
            'button' => 'OK!',
        ]]);;
    }

    public function edit(Product $product, Request $request)
    {
        $currentProduct = Product::where('id', $request->id)->first();
        $currentVendor = $currentProduct->vendor;
        $vendor = Vendor::find($currentVendor);
        $vendorFields = [
            'value' => $currentVendor->id,
            'label' => $currentVendor->name,
        ];

        return Inertia::render('Inventory/InventoryEdit', [
            'active' => 'product',
            'product' => $product->find($request->id),
            'vendor' => Vendor::all(),
            'currentVendor' => $vendorFields,
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'default_code' => 'required',
            'sale_price' => 'required',
            'purchase_price' => 'required',
            'barcode_no' => 'required',
            'batch_no' => 'required',
            'available_stock' => 'required',
            'vendor_id' => 'required',
            'uom' => 'required',
        ]);

        Product::find($request->id)->update([
            'name' => $request->name,
            'default_code' => $request->default_code,
            'sale_price' => $request->sale_price,
            'purchase_price' => $request->purchase_price,
            'barcode_no' => $request->barcode_no,
            'batch_no' => $request->batch_no,
            'available_stock' => $request->available_stock,
            // 'vendor_id' => $request->vendor_id,
            'vendor_id' => $request->vendor_id['value'],
            'uom' => $request->uom,
        ]);

        return redirect()->route('product.index');
    }

    public function destroy(Request $request)
    {
        Product::find($request->id)->delete();
        return redirect()->route('product.index');
    }
}
