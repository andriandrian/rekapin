<?php

namespace Database\Seeders;

use App\Models\Customer;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Customer::create([
            'name' => "Toko Obat",
            'phone' => '081234567890',
            'email' => 'admin@mail.com',
            'address' => 'Jl. Raya No. 1',
        ]);

        Customer::create([
            'name' => "Toko Buku",
            'phone' => '081234567890',
            'email' => 'tokobuku@mail.com',
            'address' => 'Jl. Raya No. 2',
        ]);
    }
}
