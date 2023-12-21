<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Product;
use App\Models\Purchase;
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
        $totalSalesCount = Sale::count();
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

        $customers = Customer::with('sale')->get();
        $topCustomer = [];

        foreach ($customers as $customer) {
            $totalSales = 0;
            foreach ($customer->sale as $sale) {
                $totalSales += $sale->price_total;
            }
            $topCustomer[] = [
                'name' => $customer->name,
                'sales' => $totalSales,
            ];
        }

        // foreach ($customers as $customer) {
        //     $totalSales = 0;
        //     $saleOrders = Sale::all();
        //     foreach ($saleOrders as $saleOrder) {
        //         if ($saleOrder->partner_id == $customer->id) {
        //             $totalSales += 1;
        //         }
        //     }
        //     $topCustomer[] = [
        //         'name' => $customer->name,
        //         'sales' => $totalSales,
        //     ];
        // }


        usort($topCustomer, function ($item1, $item2) {
            return $item2['sales'] <=> $item1['sales'];
        });
        $top5Customer = array_slice($topCustomer, 0, 4);


        // recent activity
        $recentActivity = [];
        $saleOrders = Sale::all();
        foreach ($saleOrders as $saleOrder) {
            $recentActivity[] = [
                'name' => $saleOrder->sale_no,
                'type' => 'Sale',
                // format date with hours and minutes
                'date' => $saleOrder->created_at->format('d-m-Y H:i:s'),
            ];
        }

        $purchaseOrders = Purchase::all();
        foreach ($purchaseOrders as $purchaseOrder) {
            $recentActivity[] = [
                'name' => $purchaseOrder->purchase_no,
                'type' => 'Purchase',
                // 'date' => $purchaseOrder->created_at,
                'date' => $purchaseOrder->created_at->format('d-m-Y H:i:s'),
            ];
        }

        usort($recentActivity, function ($item1, $item2) {
            return $item2['date'] <=> $item1['date'];
        });

        // dd($recentActivity);

        $recentActivity = array_slice($recentActivity, 0, 4);




        return Inertia::render('Dashboard/Dashboard', [
            'title' => 'Dashboard',
            'active' => 'dashboard',
            'products' => $productsData,
            'totalProfits' => array_sum(array_column($productsData, 'profit')),
            'totalProducts' => $totalProducts,
            'totalSales' => $totalSalesCount,
            'totalCustomers' => $totalCustomers,
            'totalVendors' => $totalVendors,
            'totalInvoicePerDay' => $totalInvoicePerDay,
            'topProductSold' => $top10ProductSold,
            'topCustomer' => $top5Customer,
            'recentActivity' => $recentActivity,
        ]);
    }
}
