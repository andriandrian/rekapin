<?php

namespace App\Http\Controllers;

use App\Models\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ApiVendorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Vendor::orderBy('name', 'asc')->paginate(10);
        return response()->json([
            'status' => 'success',
            'message' => 'Data vendor berhasil ditampilkan',
            'data' => $data
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $dataVendor = new Vendor();

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

        $dataVendor->name = $request->name;
        $dataVendor->phone = $request->phone;
        $dataVendor->email = $request->email;
        $dataVendor->address = $request->address;

        $post = $dataVendor->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Data vendor berhasil ditambahkan',
            'data' => $dataVendor
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Vendor::where('id', $id)->first();
        if ($data) {
            return response()->json([
                'status' => 'success',
                'message' => 'Data vendor berhasil ditampilkan',
                'data' => $data
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Data vendor tidak ditemukan',
                'data' => null
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $dataVendor = Vendor::where('id', $id)->first();
        if (!$dataVendor) {
            return response()->json([
                'status' => 'error',
                'message' => 'Data vendor tidak ditemukan',
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

        $dataVendor->name = $request->name;
        $dataVendor->phone = $request->phone;
        $dataVendor->email = $request->email;
        $dataVendor->address = $request->address;

        $post = $dataVendor->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Data vendor berhasil diupdate',
            'data' => $dataVendor
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $dataVendor = Vendor::where('id', $id)->first();
        if (!$dataVendor) {
            return response()->json([
                'status' => 'error',
                'message' => 'Data vendor tidak ditemukan',
                'data' => null
            ], 404);
        }

        $dataVendor->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Data vendor berhasil dihapus',
            'data' => $dataVendor
        ], 200);
    }
}
