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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get('/', function () {
    return Inertia::render('Auth/Login');
})->name('auth.login');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/test', function () {
    return Inertia::render('Test');
})->middleware(['auth', 'verified'])->name('test');

Route::get('/inventory', function () {
    return Inertia::render('Inventory');
})->middleware(['auth', 'verified'])->name('inventory');

Route::get('/customer', function () {
    return Inertia::render('Customer');
})->middleware(['auth', 'verified'])->name('customer');

Route::get('/vendor', function () {
    return Inertia::render('Vendor');
})->middleware(['auth', 'verified'])->name('vendor');

Route::get('/sales-order', function () {
    return Inertia::render('SalesOrder');
})->middleware(['auth', 'verified'])->name('sales-order');

Route::get('/sales-invoice', function () {
    return Inertia::render('SalesInvoice');
})->middleware(['auth', 'verified'])->name('sales-invoice');

Route::get('/purchasing', function () {
    return Inertia::render('Purchasing');
})->middleware(['auth', 'verified'])->name('purchasing');

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
