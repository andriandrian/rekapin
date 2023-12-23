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
            'name' => "PT. Tempo Scan",
            'phone' => '0800 0000 0001',
            'email' => 'email1@gmail.com',
            'address' => 'Batam',
        ]);

        Vendor::create([
            'name' => "PT. Sehat Inti Perkasa",
            'phone' => '0800 0000 0002',
            'email' => 'email2@gmail.com',
            'address' => 'Batam',
        ]);

        Vendor::create([
            'name' => "PT. Anugerah Pharmindo Lestari",
            'phone' => '0800 0000 0003',
            'email' => 'email3@gmail.com',
            'address' => 'Batam',
        ]);

        Vendor::create([
            'name' => "PT. Anugerah Argon Medica",
            'phone' => '0800 0000 0004',
            'email' => 'email4@gmail.com',
            'address' => 'Batam',
        ]);

        Vendor::create([
            'name' => "PT. Bina San Prima",
            'phone' => '0800 0000 0005',
            'email' => 'email5@gmail.com',
            'address' => 'Batam',
        ]);

        Vendor::create([
            'name' => "PT. Bintang Intan Sarana",
            'phone' => '0800 0000 0006',
            'email' => 'email6@gmail.com',
            'address' => 'Batam',
        ]);

        Vendor::create([
            'name' => "PT. Bintang Sarimaas Batam",
            'phone' => '0800 0000 0007',
            'email' => 'email7@gmail.com',
            'address' => 'Batam',
        ]);

        Vendor::create([
            'name' => "PT. Dilindo Berkah Sejahtera",
            'phone' => '0800 0000 0008',
            'email' => 'email8@gmail.com',
            'address' => 'Batam',
        ]);


        Vendor::create([
            'name' => "PT.Enseval Putera Megatradir",
            'phone' => '0800 0000 0009',
            'email' => 'email9@gmail.com',
            'address' => 'Batam',
        ]);

        Vendor::create([
            'name' => "PT. Great Batam Global",
            'phone' => '0800 0000 0010',
            'email' => 'email10@gmail.com',
            'address' => 'Batam',
        ]);

        // $vendorsData = [];

        // for ($i = 1; $i <= 25; $i++) {
        //     $vendorsData[] = [
        //         'name' => "Vendor $i",
        //         'phone' => '081234567890',
        //         'email' => "vendor$i@mail.com",
        //         'address' => "Jl. Raya No. $i",
        //     ];
        // }

        // foreach ($vendorsData as $vendor) {
        //     Vendor::create($vendor);
        // }
    }
}
