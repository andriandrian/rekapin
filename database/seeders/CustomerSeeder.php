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
            'name' => "Kimia Farma 223",
            'phone' => '080000000001',
            'address' => 'Tiban',
        ]);

        Customer::create([
            'name' => "Kimia Farma Lubuk Baja",
            'phone' => '080000000002',
            'address' => 'Lubuk Baja',
        ]);

        Customer::create([
            'name' => "Apotek R24 Seraya",
            'phone' => '080000000003',
            'address' => 'Seraya',
        ]);

        Customer::create([
            'name' => "Apotek Oto Farma",
            'phone' => '080000000004',
            'address' => 'JL. Bunga Raya',
        ]);

        Customer::create([
            'name' => "Kimia Farma Batam Centre",
            'phone' => '080000000005',
            'address' => 'Batam Centre',
        ]);

        Customer::create([
            'name' => "Kimia Farma Baloi",
            'phone' => '080000000006',
            'address' => 'Baloi',
        ]);

        Customer::create([
            'name' => "Kimia Farma Tiban Garden",
            'phone' => '080000000007',
            'address' => 'Tiban Garden',
        ]);

        Customer::create([
            'name' => "Apotek Mitra Farma Tiban",
            'phone' => '080000000008',
            'address' => 'Tiban',
        ]);

        Customer::create([
            'name' => "Kimia Farma Jodoh",
            'phone' => '080000000009',
            'address' => 'Jodoh',
        ]);

        Customer::create([
            'name' => "Apotek Calista",
            'phone' => '080000000010',
            'address' => 'JL. Komp Bumi',
        ]);

        Customer::create([
            'name' => "Apotek Permata Bunda",
            'phone' => '080000000011',
            'address' => 'JL. Gajah Mada',
        ]);

        Customer::create([
            'name' => "Apotek Endar Farma",
            'phone' => '080000000012',
            'address' => 'Komplek Town House',
        ]);

        Customer::create([
            'name' => "Apotek Penuin",
            'phone' => '080000000013',
            'address' => 'Penuin',
        ]);

        Customer::create([
            'name' => "Apotek Sentosa",
            'phone' => '080000000014',
            'address' => 'JL. Bunga Raya',
        ]);

        Customer::create([
            'name' => "Apotek Vitka Farma",
            'phone' => '080000000015',
            'address' => 'Batam',
        ]);

        Customer::create([
            'name' => "Kimia Farma Newton",
            'phone' => '080000000016',
            'address' => 'Nagoya',
        ]);

        Customer::create([
            'name' => "Apotek karya Farma",
            'phone' => '080000000017',
            'address' => 'Sei Baloi',
        ]);

        Customer::create([
            'name' => "Apotek M23",
            'phone' => '080000000018',
            'address' => 'Tiban Indah',
        ]);

        Customer::create([
            'name' => "Apotek Yanda Farma",
            'phone' => '080000000019',
            'address' => 'Tanjung Pantun',
        ]);

        // Customer::create([
        //     'name' => "Boy Mart",
        //     'phone' => '081234567890',
        //     'email' => 'admin@mail.com',
        //     'address' => 'Jl. Raya No. 1',
        // ]);

        // Customer::create([
        //     'name' => "Best Mart",
        //     'phone' => '081234567890',
        //     'email' => 'tokobuku@mail.com',
        //     'address' => 'Jl. Raya No. 2',
        // ]);

        // Customer::create([
        //     'name' => "Kimia Farma",
        //     'phone' => '081234567890',
        //     'email' => 'kimiafarma@mail.com',
        //     'address' => 'Jl. Raya No. 3',
        // ]);

        // Customer::create([
        //     'name' => "Alfamart",
        //     'phone' => '081234567890',
        //     'email' => 'alfamart@mail.com',
        //     'address' => 'Jl. Raya No. 4',
        // ]);

        // Customer::create([
        //     'name' => "Indomaret",
        //     'phone' => '081234567890',
        //     'email' => 'indomaret@mail.com',
        //     'address' => 'Jl. Raya No. 5',
        // ]);

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
