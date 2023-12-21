<?php

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\SaleInvoiceController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('auth.login');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/dashboard', function () {
//     return redirect()->route('inventory');
// })->middleware(['auth', 'verified'])->name('dashboard');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');
});

// CUSTOMER ========================================

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/customer', [CustomerController::class, 'index'])->name('customer');
    Route::get('/customer/create', [CustomerController::class, 'create'])->name('customer.create');
    Route::post('/customer/store', [CustomerController::class, 'store'])->name('customer.store');
    Route::get('/customer/edit', [CustomerController::class, 'edit'])->name('customer.edit');
    Route::post('/customer/update', [CustomerController::class, 'update'])->name('customer.update');
    Route::delete('/customer/delete', [CustomerController::class, 'destroy'])->name('customer.destroy');
});

// INVENTORY ========================================

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/inventory', [ProductController::class, 'index'])->name('inventory');
    Route::get('/inventory/create', [ProductController::class, 'create'])->name('product.create');
    Route::post('/inventory/store', [ProductController::class, 'store'])->name('product.store');
    Route::get('/inventory/edit', [ProductController::class, 'edit'])->name('product.edit');
    Route::post('/inventory/update', [ProductController::class, 'update'])->name('product.update');
    Route::delete('/inventory/delete', [ProductController::class, 'destroy'])->name('product.destroy');
});

// VENDOR ========================================

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/vendor', [VendorController::class, 'index'])->name('vendor');
    Route::get('/vendor/create', [VendorController::class, 'create'])->name('vendor.create');
    Route::post('/vendor/store', [VendorController::class, 'store'])->name('vendor.store');
    Route::get('/vendor/edit', [VendorController::class, 'edit'])->name('vendor.edit');
    Route::post('/vendor/update', [VendorController::class, 'update'])->name('vendor.update');
    Route::delete('/vendor/delete', [VendorController::class, 'destroy'])->name('vendor.destroy');
});

// SALES ========================================

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/sale', [SaleController::class, 'index'])->name('sale');
    Route::get('/sale/create', [SaleController::class, 'create'])->name('sale.create');
    Route::post('/sale/store', [SaleController::class, 'store'])->name('sale.store');
    Route::get('/sale/edit', [SaleController::class, 'edit'])->name('sale.edit');
    Route::post('/sale/update', [SaleController::class, 'update'])->name('sale.update');
    Route::delete('/sale/delete', [SaleController::class, 'destroy'])->name('sale.destroy');
    Route::post('/invoice/create', [SaleInvoiceController::class, 'create'])->name('invoice.create');
    Route::post('/invoice/status', [SaleInvoiceController::class, 'status'])->name('invoice.status');
    Route::get('/invoice', [SaleInvoiceController::class, 'index'])->name('invoice');
    Route::get('/invoice/edit', [SaleInvoiceController::class, 'edit'])->name('invoice.edit');
    Route::delete('/invoice/delete', [SaleInvoiceController::class, 'destroy'])->name('invoice.destroy');
});

// PURCHASE ========================================

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/purchase', [PurchaseController::class, 'index'])->name('purchase');
    Route::get('/purchase/create', [PurchaseController::class, 'create'])->name('purchase.create');
    Route::post('/purchase/store', [PurchaseController::class, 'store'])->name('purchase.store');
    Route::get('/purchase/edit', [PurchaseController::class, 'edit'])->name('purchase.edit');
    Route::post('/purchase/update', [PurchaseController::class, 'update'])->name('purchase.update');
    Route::post('/purchase/status', [PurchaseController::class, 'status'])->name('purchase.status');
    Route::delete('/purchase/delete', [PurchaseController::class, 'destroy'])->name('purchase.destroy');
});

// Route::get('/settings', function () {
//     return Inertia::render('Settings');
// })->middleware(['auth', 'verified'])->name('settings');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('/settings', [SettingController::class, 'edit'])->name('setting.edit');
//     Route::patch('/settings', [settingController::class, 'update'])->name('setting.update');
//     Route::delete('/settings', [settingController::class, 'destroy'])->name('setting.destroy');
// });

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
