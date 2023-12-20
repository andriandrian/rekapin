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
            'name' => "Boy Mart",
            'phone' => '081234567890',
            'email' => 'admin@mail.com',
            'address' => 'Jl. Raya No. 1',
        ]);

        Customer::create([
            'name' => "Best Mart",
            'phone' => '081234567890',
            'email' => 'tokobuku@mail.com',
            'address' => 'Jl. Raya No. 2',
        ]);

        Customer::create([
            'name' => "Kimia Farma",
            'phone' => '081234567890',
            'email' => 'kimiafarma@mail.com',
            'address' => 'Jl. Raya No. 3',
        ]);

        Customer::create([
            'name' => "Alfamart",
            'phone' => '081234567890',
            'email' => 'alfamart@mail.com',
            'address' => 'Jl. Raya No. 4',
        ]);

        Customer::create([
            'name' => "Indomaret",
            'phone' => '081234567890',
            'email' => 'indomaret@mail.com',
            'address' => 'Jl. Raya No. 5',
        ]);

        // $customersData = [];

        // for ($i = 1; $i <= 25; $i++) {
        //     $customersData[] = [
        //         'name' => "Customer $i",
        //         'phone' => '081234567890',
        //         'email' => "customer$i@mail.com",
        //         'address' => "Jl. Raya No. $i",
        //     ];
        // }

        // foreach ($customersData as $customer) {
        //     Customer::create($customer);
        // }
    }
}
