<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ApiCustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Customer::orderBy('name', 'asc')->paginate(10);
        return response()->json([
            'status' => 'success',
            'message' => 'Data customer berhasil ditampilkan',
            'data' => $data
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $dataCustomer = new Customer();

        $rules = [
            'name' => 'required|min:3',
            'phone' => 'required|numeric',
            'email' => 'required|email',
            'address' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => $validator->errors()
                ],
                400
            );
        }

        $dataCustomer->name = $request->name;
        $dataCustomer->phone = $request->phone;
        $dataCustomer->email = $request->email;
        $dataCustomer->address = $request->address;

        $post = $dataCustomer->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Data customer berhasil ditambahkan',
            'data' => $dataCustomer
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Customer::where('id', $id)->first();
        if ($data) {
            return response()->json([
                'status' => 'success',
                'message' => 'Data customer berhasil ditampilkan',
                'data' => $data
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Data customer tidak ditemukan',
                'data' => null
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $dataCustomer = Customer::where('id', $id)->first();
        if (!$dataCustomer) {
            return response()->json([
                'status' => 'error',
                'message' => 'Data customer tidak ditemukan',
                'data' => null
            ], 404);
        }

        $rules = [
            'name' => 'required|min:3',
            'phone' => 'required|numeric',
            'email' => 'required|email',
            'address' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => $validator->errors()
                ],
                400
            );
        }

        $dataCustomer->name = $request->name;
        $dataCustomer->phone = $request->phone;
        $dataCustomer->email = $request->email;
        $dataCustomer->address = $request->address;

        $post = $dataCustomer->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Data customer berhasil diupdate',
            'data' => $dataCustomer
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $dataCustomer = Customer::where('id', $id)->first();
        if (!$dataCustomer) {
            return response()->json([
                'status' => 'error',
                'message' => 'Data customer tidak ditemukan',
                'data' => null
            ], 404);
        }

        $dataCustomer->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Data customer berhasil dihapus',
            'data' => $dataCustomer
        ], 200);
    }
}
