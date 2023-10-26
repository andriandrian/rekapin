<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/dashboard', function () {
    return redirect()->route('inventory');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/inventory', function () {
    return Inertia::render('Inventory/Inventory');
})->middleware(['auth', 'verified'])->name('inventory');

Route::get('/inventory-create', function () {
    return Inertia::render('Inventory/InventoryCreate');
})->middleware(['auth', 'verified'])->name('inventory-create');

Route::get('/inventory-edit', function () {
    return Inertia::render('Inventory/InventoryEdit');
})->middleware(['auth', 'verified'])->name('inventory-edit');

Route::get('/inventory-stock', function () {
    return Inertia::render('Inventory/InventoryStock');
})->middleware(['auth', 'verified'])->name('inventory-stock');

Route::get('/customer', function () {
    return Inertia::render('Customer/Customer');
})->middleware(['auth', 'verified'])->name('customer');

Route::get('/customer-create', function () {
    return Inertia::render('Customer/CustomerCreate');
})->middleware(['auth', 'verified'])->name('customer-create');

Route::get('/customer-edit', function () {
    return Inertia::render('Customer/CustomerEdit');
})->middleware(['auth', 'verified'])->name('customer-edit');

Route::get('/vendor', function () {
    return Inertia::render('Vendor/Vendor');
})->middleware(['auth', 'verified'])->name('vendor');

Route::get('/vendor-create', function () {
    return Inertia::render('Vendor/VendorCreate');
})->middleware(['auth', 'verified'])->name('vendor-create');

Route::get('/sales-order', function () {
    return Inertia::render('SalesOrder/SalesOrder');
})->middleware(['auth', 'verified'])->name('sales-order');

Route::get('/sales-order-create', function () {
    return Inertia::render('SalesOrder/SalesOrderCreate');
})->middleware(['auth', 'verified'])->name('sales-order-create');

Route::get('/sales-invoice', function () {
    return Inertia::render('SalesInvoice/SalesInvoice');
})->middleware(['auth', 'verified'])->name('sales-invoice');

Route::get('/sales-invoice', function () {
    return Inertia::render('SalesInvoice/SalesInvoice');
})->middleware(['auth', 'verified'])->name('sales-invoice');

Route::get('/sales-invoice-create', function () {
    return Inertia::render('SalesInvoice/SalesInvoiceCreate');
})->middleware(['auth', 'verified'])->name('sales-invoice-create');

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

require __DIR__.'/auth.php';
