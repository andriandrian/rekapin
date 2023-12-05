<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\Sale;
use Inertia\Inertia;

class SaleController extends Controller
{
    public function index()
    {
        return Inertia::render('Sale/Sale', [
            'title' => 'Sale',
            'active' => 'sale',
            'sale' => Sale::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Sale/SaleCreate', [
            'title' => 'Sale Create',
            'active' => 'sale',
            'product' => Product::all(),
            'customer' => Customer::all(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'partner_id' => 'required',
            'date' => 'required',
            'price_total' => 'required',
        ]);

        Sale::create([
            'partner_id' => $request->partner_id,
            'date' => $request->date,
            'price_total' => $request->price_total,
            'memo' => $request->memo,
        ]);

        return redirect()->route('sale.index')->with('success', 'Sale created successfully.');
    }

    public function edit(Sale $sale, Request $request)
    {
        return Inertia::render('Sale/SaleEdit', [
            'active' => 'sale',
            'sale' => $sale->find($request->id)
        ]);
    }

    public function update(Request $request)
    {
        Sale::find($request->id)->update([
            'partner_id' => $request->partner_id,
            'product_id' => $request->product_id,
            'date' => $request->date,
            'price_total' => $request->price_total,
            'memo' => $request->memo,
        ]);

        return redirect()->route('sale.index');
    }

    public function destroy(Request $request)
    {
        Sale::find($request->id)->delete();
        return redirect()->route('sale.index');
    }
}
