<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Product;
use App\Models\PurchaseOrderLine;
use App\Models\Sale;
use App\Models\SaleInvoice;
use App\Models\SaleOrderLine;
use App\Models\Vendor;
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

        // total product in table product
        $totalProducts = Product::count();
        $totalSales = Sale::count();
        $totalCustomers = Customer::count();
        $totalVendors = Vendor::count();
        $totalInvoicePerDay = 0;

        // get total invoice per day
        $saleInvoices = SaleInvoice::whereDate('created_at', date('Y-m-d'))->get();
        foreach ($saleInvoices as $saleInvoice) {
            $totalInvoicePerDay += 1;
        }

        $products = Product::all();
        $topProductSold = [];
        foreach ($products as $product) {
            $totalProductSold = 0;
            foreach ($saleOrderLines as $saleOrderLine) {
                if ($saleOrderLine->product_id == $product->id) {
                    $totalProductSold += $saleOrderLine->product_quantity;
                }
            }
            $topProductSold[] = [
                'name' => $product->name,
                'totalProductSold' => $totalProductSold,
            ];
        }

        // sort top product sold by total product sold only top 3
        usort($topProductSold, function ($item1, $item2) {
            return $item2['totalProductSold'] <=> $item1['totalProductSold'];
        });

        $top10ProductSold = array_slice($topProductSold, 0, 10);

        $customers = Customer::all();
        $topCustomer = [];
        foreach ($customers as $customer) {
            $totalSales = 0;
            $saleOrders = Sale::all();
            foreach ($saleOrders as $saleOrder) {
                if ($saleOrder->customer_id == $customer->id) {
                    $totalSales += 1;
                }
            }
            $topCustomer[] = [
                'name' => $customer->name,
                'sales' => $totalSales,
            ];
        }

        $top5Customer = array_slice($topCustomer, 0, 5);




        return Inertia::render('Dashboard/Dashboard', [
            'title' => 'Dashboard',
            'active' => 'dashboard',
            'products' => $productsData,
            'totalProfits' => array_sum(array_column($productsData, 'profit')),
            'totalProducts' => $totalProducts,
            'totalSales' => $totalSales,
            'totalCustomers' => $totalCustomers,
            'totalVendors' => $totalVendors,
            'totalInvoicePerDay' => $totalInvoicePerDay,
            'topProductSold' => $top10ProductSold,
            'topCustomer' => $top5Customer
        ]);
    }
}
