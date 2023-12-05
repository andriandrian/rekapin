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
use App\Http\Controllers\PurchaseController;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('auth.login');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/dashboard', function () {
//     return redirect()->route('inventory');
// })->middleware(['auth', 'verified'])->name('dashboard');

// CUSTOMER ========================================

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/customer', [CustomerController::class, 'index'])->name('customer.index');
    Route::get('/customer/create', [CustomerController::class, 'create'])->name('customer.create');
    Route::post('/customer/store', [CustomerController::class, 'store'])->name('customer.store');
    Route::get('/customer/edit', [CustomerController::class, 'edit'])->name('customer.edit');
    Route::post('/customer/update', [CustomerController::class, 'update'])->name('customer.update');
    Route::delete('/customer/delete', [CustomerController::class, 'destroy'])->name('customer.destroy');
});

// INVENTORY ========================================

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/inventory', [ProductController::class, 'index'])->name('product.index');
    Route::get('/inventory/create', [ProductController::class, 'create'])->name('product.create');
    Route::post('/inventory/store', [ProductController::class, 'store'])->name('product.store');
    Route::get('/inventory/edit', [ProductController::class, 'edit'])->name('product.edit');
    Route::post('/inventory/update', [ProductController::class, 'update'])->name('product.update');
    Route::delete('/inventory/delete', [ProductController::class, 'destroy'])->name('product.destroy');
});

// VENDOR ========================================

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/vendor', [VendorController::class, 'index'])->name('vendor.index');
    Route::get('/vendor/create', [VendorController::class, 'create'])->name('vendor.create');
    Route::post('/vendor/store', [VendorController::class, 'store'])->name('vendor.store');
    Route::get('/vendor/edit', [VendorController::class, 'edit'])->name('vendor.edit');
    Route::post('/vendor/update', [VendorController::class, 'update'])->name('vendor.update');
    Route::delete('/vendor/delete', [VendorController::class, 'destroy'])->name('vendor.destroy');
});

// SALES ========================================

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/sale', [SaleController::class, 'index'])->name('sale.index');
    Route::get('/sale/create', [SaleController::class, 'create'])->name('sale.create');
    Route::post('/sale/store', [SaleController::class, 'store'])->name('sale.store');
    Route::get('/sale/edit', [SaleController::class, 'edit'])->name('sale.edit');
    Route::patch('/sale/update', [SaleController::class, 'update'])->name('sale.update');
    Route::delete('/sale/delete', [SaleController::class, 'destroy'])->name('sale.destroy');
});

// Route::get('/sales-order', function () {
//     return Inertia::render('SalesOrder/SalesOrder');
// })->middleware(['auth', 'verified'])->name('sales-order');

// Route::get('/sales-order-create', function () {
//     return Inertia::render('SalesOrder/SalesOrderCreate');
// })->middleware(['auth', 'verified'])->name('sales-order-create');

Route::get('/sales-invoice', function () {
    return Inertia::render('SalesInvoice/SalesInvoice');
})->middleware(['auth', 'verified'])->name('sales-invoice');

Route::get('/sales-invoice-create', function () {
    return Inertia::render('SalesInvoice/SalesInvoiceCreate');
})->middleware(['auth', 'verified'])->name('sales-invoice-create');




// PURCHASE ========================================

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/purchase', [PurchaseController::class, 'index'])->name('purchase.edit');
    Route::get('/purchase/create', [PurchaseController::class, 'create'])->name('purchase.edit');
});

Route::get('/purchasing', function () {
    return Inertia::render('Purchasing/Purchasing');
})->middleware(['auth', 'verified'])->name('purchasing');

Route::get('/purchasing-create', function () {
    return Inertia::render('Purchasing/PurchasingCreate');
})->middleware(['auth', 'verified'])->name('purchasing-create');

Route::get('/settings', function () {
    return Inertia::render('Settings');
})->middleware(['auth', 'verified'])->name('settings');

Route::get('/product-detail', function () {
    return Inertia::render('ProductDetail');
})->middleware(['auth', 'verified'])->name('product-detail');

Route::get('/accounts', function () {
    return Inertia::render('Accounts');
})->middleware(['auth', 'verified'])->name('accounts');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
