<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Purchase;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PurchaseController extends Controller
{
    public function index()
    {
        return Inertia::render('Purchase/Purchase', [
            'title' => 'Purchase',
            'active' => 'purchase',
            'purchase' => Purchase::latest(),
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
}
