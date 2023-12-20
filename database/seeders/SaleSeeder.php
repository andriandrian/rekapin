<?php

namespace Database\Seeders;

use App\Models\Sale;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SaleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Sale::create([
            'partner_id' => 1,
            'date' => '2021-01-01',
            'price_total' => '100000',
            'memo' => 'memo',
        ]);

        Sale::create([
            'partner_id' => 2,
            'date' => '2021-01-02',
            'price_total' => '200000',
            'memo' => 'memo',
        ]);

        Sale::create([
            'partner_id' => 3,
            'date' => '2021-01-03',
            'price_total' => '300000',
            'memo' => 'memo',
        ]);
    }
}
