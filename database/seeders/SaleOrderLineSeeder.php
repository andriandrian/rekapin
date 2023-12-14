<?php

namespace Database\Seeders;

use App\Models\SaleOrderLine;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SaleOrderLineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SaleOrderLine::create(
            [
                'sale_id' => 1,
                'product_id' => 1,
                'product_quantity' => '10',
                'discount' => '0',
                'subtotal' => '1000000',
            ],
        );

        SaleOrderLine::create(
            [
                'sale_id' => 1,
                'product_id' => 2,
                'product_quantity' => '5',
                'discount' => '0',
                'subtotal' => '2000000',
            ],
        );

        SaleOrderLine::create(
            [
                'sale_id' => 2,
                'product_id' => 3,
                'product_quantity' => '10',
                'discount' => '0',
                'subtotal' => '3000000',
            ],
        );

        SaleOrderLine::create(
            [
                'sale_id' => 3,
                'product_id' => 4,
                'product_quantity' => '5',
                'discount' => '0',
                'subtotal' => '4000000',
            ],
        );
    }
}
