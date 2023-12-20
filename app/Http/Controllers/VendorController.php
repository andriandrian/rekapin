<?php

namespace App\Http\Controllers;

use App\Models\Vendor;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VendorController extends Controller
{
    public function index(Request $request)
    {
        // $client = new Client();
        // $url = 'http://localhost:8000/api/vendor';
        // $response = $client->request('GET', $url);
        // $content = $response->getBody()->getContents();
        // $contentArray = json_decode($content, true);
        // $vendor = $contentArray['data'];

        // return Inertia::render('Vendor/Vendor', [
        //     'title' => 'Vendor',
        //     'active' => 'vendor',
        //     'vendor' => $vendor
        // ]);
        return Inertia::render('Vendor/Vendor', [
            'title' => 'Vendor',
            'active' => 'vendor',
            'vendor' => Vendor::search($request->search)
                ->orderBy('name', 'asc')
                ->paginate(10),
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
        // $url = 'http://localhost:8000/api/vendor';
        // $response = $client->request('POST', $url, [
        //     'headers' => ['Content-type' => 'application/json'],
        //     'body' => json_encode($parameter)
        // ]);
        // $content = $response->getBody()->getContents();
        // $contentArray = json_decode($content, true);
        // if ($contentArray['status'] == 'success') {
        //     return redirect()->route('vendor')->with(['message' => [
        //         'type' => 'success',
        //         'text' => 'Vendor created successfully.',
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

        Vendor::create([
            'name' => $request->name,
            'address' => $request->address,
            'phone' => $request->phone,
            'email' => $request->email
        ]);

        return redirect()->route('vendor')->with(['message' => [
            'type' => 'success',
            'text' => 'Vendor created successfully.',
            'button' => 'OK!',
        ]]);
    }

    public function edit(Vendor $vendor, Request $request)
    {
        // $id = $request->id;
        // $client = new Client();
        // $url = "http://localhost:8000/api/vendor/$id";
        // $response = $client->request('GET', $url);
        // $content = $response->getBody()->getContents();
        // $contentArray = json_decode($content, true);
        // if ($contentArray['status'] != 'success') {
        //     return redirect()->route('vendor')->with(['message' => [
        //         'type' => 'danger',
        //         'text' => 'Vendor not found.',
        //     ]]);
        // } else {
        //     $vendor = $contentArray['data'];
        //     return Inertia::render('Vendor/VendorEdit', [
        //         'title' => 'Vendor Edit',
        //         'active' => 'vendor',
        //         'vendor' => $vendor
        //     ]);
        // }

        return Inertia::render('Vendor/VendorEdit', [
            'active' => 'vendor',
            'vendor' => $vendor->find($request->id)
        ]);
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
        // $url = "http://localhost:8000/api/vendor/$id";
        // $response = $client->request('PUT', $url, [
        //     'headers' => ['Content-type' => 'application/json'],
        //     'body' => json_encode($parameter)
        // ]);
        // $content = $response->getBody()->getContents();
        // $contentArray = json_decode($content, true);
        // if ($contentArray['status'] == 'success') {
        //     return redirect()->route('vendor')->with(['message' => [
        //         'type' => 'success',
        //         'text' => 'Vendor updated successfully.',
        //     ]]);
        // } else {
        //     $error = $contentArray['message'];
        //     return redirect()->back()->with($error)->withInput();
        // }

        Vendor::find($request->id)->update([
            'name' => $request->name,
            'address' => $request->address,
            'phone' => $request->phone,
            'email' => $request->email,
        ]);

        return redirect()->route('vendor');
    }

    public function destroy(Request $request)
    {
        // $client = new Client();
        // $id = $request->id;
        // $url = "http://localhost:8000/api/vendor/$id";
        // $response = $client->request('DELETE', $url);
        // $content = $response->getBody()->getContents();
        // $contentArray = json_decode($content, true);
        // if ($contentArray['status'] == 'success') {
        //     return redirect()->route('vendor')->with(['message' => [
        //         'type' => 'success',
        //         'text' => 'Vendor deleted successfully.',
        //     ]]);
        // } else {
        //     $error = $contentArray['message'];
        //     return redirect()->back()->with($error)->withInput();
        // }

        Vendor::find($request->id)->delete();
        return redirect()->route('vendor');
    }
}
