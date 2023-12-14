<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::paginate(10);
        return Inertia::render('Customer/Customer', [
            'title' => 'Customer',
            'active' => 'customer',
            'customer' => $customers,
        ]);
    }

    public function create()
    {
        return Inertia::render('Customer/CustomerCreate', [
            'title' => 'Customer Create',
            'active' => 'customer',
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

        Customer::create([
            'name' => $request->name,
            'address' => $request->address,
            'phone' => $request->phone,
            'email' => $request->email
        ]);

        return redirect()->route('customer.index')->with(['message' => [
            'type' => 'success',
            'text' => 'Customer created successfully.',
            'button' => 'OK!',
        ]]);
    }

    public function edit(Customer $customer, Request $request)
    {
        return Inertia::render('Customer/CustomerEdit', [
            'active' => 'customer',
            'customer' => $customer->find($request->id)
        ]);
    }

    public function update(Request $request)
    {
        Customer::find($request->id)->update([
            'name' => $request->name,
            'address' => $request->address,
            'phone' => $request->phone,
            'email' => $request->email,
        ]);

        return redirect()->route('customer.index');
    }

    public function destroy(Request $request)
    {
        Customer::find($request->id)->delete();
        return redirect()->route('customer.index');
    }
}
