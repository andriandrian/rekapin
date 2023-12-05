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
        $products = Product::all();
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
        Product::create([
            'name' => $request->name,
            'default_code' => $request->default_code,
            'sale_price' => $request->sale_price,
            'purchase_price' => $request->purchase_price,
            'barcode_no' => $request->barcode_no,
            'batch_no' => $request->batch_no,
            'available_stock' => $request->available_stock,
            'uom' => $request->uom,
            'vendor_id' => $request->vendor_id ?? 1,
        ]);

        return redirect()->route('product.index');
    }

    public function edit(Product $product, Request $request)
    {
        return Inertia::render('Inventory/InventoryEdit', [
            'active' => 'product',
            'product' => $product->find($request->id)
        ]);
    }

    public function update(Request $request)
    {
        Product::find($request->id)->update([
            'name' => $request->name,
            'default_code' => $request->default_code,
            'sale_price' => $request->sale_price,
            'purchase_price' => $request->purchase_price,
            'barcode_no' => $request->barcode_no,
            'batch_no' => $request->batch_no,
            'available_stock' => $request->available_stock,
            'uom' => $request->uom,
            'vendor_id' => $request->vendor_id,
        ]);

        return redirect()->route('product.index');
    }

    public function destroy(Request $request)
    {
        Product::find($request->id)->delete();
        return redirect()->route('product.index');
    }
}
