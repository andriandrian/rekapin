<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\PurchaseOrderLine;
use App\Models\SaleOrderLine;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $products = Product::all();
        $saleOrderLines = SaleOrderLine::all();
        $purchaseOrderLines = PurchaseOrderLine::all();

        $productsData = [];

        foreach ($products as $product) {
            $totalSalesPrice = 0;
            $totalPurchasePrice = 0;

            foreach ($saleOrderLines as $saleOrderLine) {
                if ($saleOrderLine->product_id == $product->id) {
                    $totalSalesPrice += $saleOrderLine->subtotal;
                }
            }

            foreach ($purchaseOrderLines as $purchaseOrderLine) {
                if ($purchaseOrderLine->product_id == $product->id) {
                    $totalPurchasePrice += $purchaseOrderLine->subtotal;
                }
            }

            $productsData[] = [
                'name' => $product->name,
                'totalSalesPrice' => $totalSalesPrice,
                'totalPurchasePrice' => $totalPurchasePrice,
                'profit' => $totalSalesPrice - $totalPurchasePrice,
            ];
        }

        return Inertia::render('Dashboard/Dashboard', [
            'title' => 'Dashboard',
            'active' => 'dashboard',
            'products' => $productsData,
            'totalProfits' => array_sum(array_column($productsData, 'profit')),
        ]);
    }
}
