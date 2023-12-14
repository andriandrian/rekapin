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
            'vendor' => Vendor::paginate(10),
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
            'email' => 'required|email:dns'
        ]);

        Vendor::create([
            'name' => $request->name,
            'address' => $request->address,
            'phone' => $request->phone,
            'email' => $request->email
        ]);

        return redirect()->route('vendor.index')->with(['message' => [
            'type' => 'success',
            'text' => 'Vendor created successfully.',
            'button' => 'OK!',
        ]]);
    }

    public function edit(Vendor $vendor, Request $request)
    {
        return Inertia::render('Vendor/VendorEdit', [
            'active' => 'customer',
            'vendor' => $vendor->find($request->id)
        ]);
    }

    public function update(Request $request)
    {
        Vendor::find($request->id)->update([
            'name' => $request->name,
            'address' => $request->address,
            'phone' => $request->phone,
            'email' => $request->email,
        ]);

        return redirect()->route('vendor.index');
    }

    public function destroy(Request $request)
    {
        Vendor::find($request->id)->delete();
        return redirect()->route('vendor.index');
    }
}
