<?php

namespace App\Http\Controllers;

use App\Models\Vendor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VendorController extends Controller
{
    public function index()
    {
        return Inertia::render('Vendor/Vendor', [
            'title' => 'Vendor',
            'active' => 'vendor',
            'vendor' => Vendor::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Vendor/VendorCreate', [
            'title' => 'Vendor Create',
            'active' => 'vendor',
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'address' => 'required',
            'phone' => 'required|min:10',
            'email' => 'required|email'
        ]);

        Vendor::create([
            'name' => $request->name,
            'address' => $request->address,
            'phone' => $request->phone,
            'email' => $request->email
        ]);

        return redirect()->route('vendor.index');
    }

    public function destroy(Request $request)
    {
        Vendor::find($request->id)->delete();
        return redirect()->route('vendor.index');
    }
}
