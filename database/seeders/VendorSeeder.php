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
            'phone' => '0800 150 8888',
            'email' => 'tempo@gmail.com',
            'address' => 'Jl. Majapahit, Kp. Seraya, Kec. Batu Ampar, Kota Batam, Kepulauan Riau 29432',
        ]);

        Vendor::create([
            'name' => "PT. Sehat Inti Perkasa",
            'phone' => '0800 150 1212',
            'email' => 'icw@antikorupsi.org',
            'address' => 'Jl. Kalibata Timur IV/D No. 6 Jakarta Selatan 12740',
        ]);

        Vendor::create([
            'name' => "Toko Obat",
            'phone' => '081234567890',
            'email' => 'admin@mail.com',
            'address' => 'Jl. Raya No. 1',
        ]);

        Vendor::create([
            'name' => "Sido Muncul",
            'phone' => '081234567890',
            'email' => 'sido@mail.com',
            'address' => 'Jl. Doang No. 2',
        ]);

        $vendorsData = [];

        for ($i = 1; $i <= 25; $i++) {
            $vendorsData[] = [
                'name' => "Vendor $i",
                'phone' => '081234567890',
                'email' => "vendor$i@mail.com",
                'address' => "Jl. Raya No. $i",
            ];
        }

        foreach ($vendorsData as $vendor) {
            Vendor::create($vendor);
        }
    }
}
