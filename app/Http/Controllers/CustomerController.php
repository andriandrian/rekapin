<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use GuzzleHttp\Client;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index(Request $request)
    {
        // $client = new Client();
        // $url = 'http://localhost:8000/api/customer';
        // $response = $client->request('GET', $url);
        // $content = $response->getBody()->getContents();
        // $contentArray = json_decode($content, true);
        // $customer = $contentArray['data'];

        // return Inertia::render('Customer/Customer', [
        //     'title' => 'Customer',
        //     'active' => 'customer',
        //     'customer' => $customer
        // ]);


        return Inertia::render('Customer/Customer', [
            'title' => 'Customer',
            'active' => 'customer',
            'customer' => Customer::search($request->search)
                ->orderBy('name', 'asc')
                ->paginate(10),
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
        // $name = $request->name;
        // $phone = $request->phone;
        // $email = $request->email;
        // $address = $request->address;

        // $parameter = [
        //     'name' => $name,
        //     'phone' => $phone,
        //     'email' => $email,
        //     'address' => $address
        // ];

        // $client = new Client();
        // $url = 'http://localhost:8000/api/customer';
        // $response = $client->request('POST', $url, [
        //     'headers' => ['Content-type' => 'application/json'],
        //     'body' => json_encode($parameter)
        // ]);
        // $content = $response->getBody()->getContents();
        // $contentArray = json_decode($content, true);
        // if ($contentArray['status'] == 'success') {
        //     return redirect()->route('customer')->with(['message' => [
        //         'type' => 'success',
        //         'text' => 'Customer created successfully.',
        //     ]]);
        // } else {
        //     $error = $contentArray['message'];
        //     return redirect()->back()->with($error)->withInput();
        // }

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

        return redirect()->route('customer')->with(['message' => [
            'type' => 'success',
            'text' => 'Customer created successfully.',
            'button' => 'OK!',
        ]]);
    }

    public function edit(Request $request)
    {
        $id = $request->id;
        $client = new Client();
        $url = "http://localhost:8000/api/customer/$id";
        $response = $client->request('GET', $url);
        $content = $response->getBody()->getContents();
        $contentArray = json_decode($content, true);
        if ($contentArray['status'] != 'success') {
            return redirect()->route('customer')->with(['message' => [
                'type' => 'danger',
                'text' => 'Customer not found.',
            ]]);
        } else {
            $customer = $contentArray['data'];
            return Inertia::render('Customer/CustomerEdit', [
                'title' => 'Customer Edit',
                'active' => 'customer',
                'customer' => $customer
            ]);
        }
    }

    public function update(Request $request)
    {
        // $name = $request->name;
        // $phone = $request->phone;
        // $email = $request->email;
        // $address = $request->address;

        // $parameter = [
        //     'name' => $name,
        //     'phone' => $phone,
        //     'email' => $email,
        //     'address' => $address
        // ];

        // $client = new Client();
        // $id = $request->id;
        // $url = "http://localhost:8000/api/customer/$id";
        // $response = $client->request('PUT', $url, [
        //     'headers' => ['Content-type' => 'application/json'],
        //     'body' => json_encode($parameter)
        // ]);
        // $content = $response->getBody()->getContents();
        // $contentArray = json_decode($content, true);
        // if ($contentArray['status'] == 'success') {
        //     return redirect()->route('customer')->with(['message' => [
        //         'type' => 'success',
        //         'text' => 'Customer updated successfully.',
        //     ]]);
        // } else {
        //     $error = $contentArray['message'];
        //     return redirect()->back()->with($error)->withInput();
        // }

        Customer::find($request->id)->update([
            'name' => $request->name,
            'address' => $request->address,
            'phone' => $request->phone,
            'email' => $request->email,
        ]);

        return redirect()->route('customer');
    }

    public function destroy(Request $request)
    {
        // $client = new Client();
        // $id = $request->id;
        // $url = "http://localhost:8000/api/customer/$id";
        // $response = $client->request('DELETE', $url);
        // $content = $response->getBody()->getContents();
        // $contentArray = json_decode($content, true);
        // if ($contentArray['status'] == 'success') {
        //     return redirect()->route('customer')->with(['message' => [
        //         'type' => 'success',
        //         'text' => 'Customer deleted successfully.',
        //     ]]);
        // } else {
        //     $error = $contentArray['message'];
        //     return redirect()->back()->with($error)->withInput();
        // }

        Customer::find($request->id)->delete();
        return redirect()->route('customer');
    }
}
