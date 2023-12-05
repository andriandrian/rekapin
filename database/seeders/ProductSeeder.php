<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'name' => 'Bodrex',
            'purchase_price' => '12000',
            'sale_price' => '13000',
            'default_code' => 'BDRX',
            'barcode_no' => '121312312',
            'batch_no' => '2310',
            'available_stock' => '12',
            'uom' => 'pcs',
            'vendor_id' => 1,
        ]);

        Product::create([
            'name' => 'Panadol',
            'purchase_price' => '12000',
            'sale_price' => '13000',
            'default_code' => 'PNADL',
            'barcode_no' => '11222',
            'batch_no' => '2310',
            'available_stock' => '12',
            'uom' => 'pcs',
            'vendor_id' => 1,
        ]);
    }
}
