<?php

use App\Http\Controllers\ApiCustomerController;
use App\Http\Controllers\ApiVendorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('customer', [ApiCustomerController::class, 'index']);
Route::get('customer/{id}', [ApiCustomerController::class, 'show']);
Route::post('customer', [ApiCustomerController::class, 'store']);
Route::put('customer/{id}', [ApiCustomerController::class, 'update']);
Route::delete('customer/{id}', [ApiCustomerController::class, 'destroy']);

Route::get('vendor', [ApiVendorController::class, 'index']);
Route::get('vendor/{id}', [ApiVendorController::class, 'show']);
Route::post('vendor', [ApiVendorController::class, 'store']);
Route::put('vendor/{id}', [ApiVendorController::class, 'update']);
Route::delete('vendor/{id}', [ApiVendorController::class, 'destroy']);










// Route::apiResource('customer', ApiCustomerController::class);
// Route::apiResource('vendor', ApiVendorController::class);
