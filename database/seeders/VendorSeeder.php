<?php

namespace Database\Seeders;

use App\Models\Vendor;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class VendorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Vendor::create([
            'name' => "Toko Obat",
            'phone' => '081234567890',
            'email' => 'admin@mail.com',
            'address' => 'Jl. Raya No. 1',
        ]);
    }
}
