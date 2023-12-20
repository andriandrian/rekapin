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
            'name' => 'Bodrex Flu Batuk (48box/crt)',
            'purchase_price' => '38000',
            'sale_price' => '43000',
            'default_code' => 'BDRXFB',
            'barcode_no' => '8999908057709',
            'batch_no' => '1',
            'available_stock' => '780',
            'uom' => 'box',
            'vendor_id' => 1,
        ]);

        Product::create([
            'name' => 'Bodrex Extra (48box/crt)',
            'purchase_price' => '43000',
            'sale_price' => '48000',
            'default_code' => 'BDRXTRA',
            'barcode_no' => '8999908285003',
            'batch_no' => '1',
            'available_stock' => '3100',
            'uom' => 'box',
            'vendor_id' => 1,
        ]);

        Product::create([
            'name' => 'Bodrex Migra (48box/crt)',
            'purchase_price' => '50000',
            'sale_price' => '45000',
            'default_code' => 'BDRXMGRA',
            'barcode_no' => '8999908071903',
            'batch_no' => '1',
            'available_stock' => '2500',
            'uom' => 'box',
            'vendor_id' => 1,
        ]);

        Product::create([
            'name' => 'Bodrex Flu Batuk Berdahak (48box/crt)',
            'purchase_price' => '38000',
            'sale_price' => '43000',
            'default_code' => 'BDRXFBB',
            'barcode_no' => '8999908302205',
            'batch_no' => '1',
            'available_stock' => '802',
            'uom' => 'box',
            'vendor_id' => 1,
        ]);

        Product::create([
            'name' => 'Bodrex Flu Tablet (50box/crt)',
            'purchase_price' => '85000',
            'sale_price' => '90000',
            'default_code' => 'BDRX',
            'barcode_no' => '8999908000200',
            'batch_no' => '1',
            'available_stock' => '1207',
            'uom' => 'box',
            'vendor_id' => 1,
        ]);

        Product::create([
            'name' => 'BodrexIN Tablet (50box/crt)',
            'purchase_price' => '36000',
            'sale_price' => '41000',
            'default_code' => 'BDRXIN',
            'barcode_no' => '89999083022052',
            'batch_no' => '1',
            'available_stock' => '978',
            'uom' => 'box',
            'vendor_id' => 1,
        ]);

        Product::create([
            'name' => 'Bodrex Syrup Flu dan Batuk Tidak Berdahak 60 ML (48pcs/crt)',
            'purchase_price' => '7500',
            'sale_price' => '10000',
            'default_code' => 'BDRXSYPFBTB',
            'barcode_no' => '8999908250902',
            'batch_no' => '1',
            'available_stock' => '125',
            'uom' => 'pcs',
            'vendor_id' => 1,
        ]);

        Product::create([
            'name' => 'Panadol',
            'purchase_price' => '24000',
            'sale_price' => '25000',
            'default_code' => 'PNADL',
            'barcode_no' => '2234',
            'batch_no' => '2310',
            'available_stock' => '250',
            'uom' => 'pcs',
            'vendor_id' => 1,
        ]);

        Product::create([
            'name' => 'Paramex',
            'purchase_price' => '15000',
            'sale_price' => '13500',
            'default_code' => 'PRMX',
            'barcode_no' => '1233',
            'batch_no' => '2310',
            'available_stock' => '150',
            'uom' => 'pcs',
            'vendor_id' => 2,
        ]);

        Product::create([
            'name' => 'Antangin',
            'purchase_price' => '12000',
            'sale_price' => '13000',
            'default_code' => 'ANTG',
            'barcode_no' => '5542',
            'batch_no' => '2310',
            'available_stock' => '100',
            'uom' => 'pcs',
            'vendor_id' => 2,
        ]);

        $productData = [];

        for ($i = 1; $i <= 25; $i++) {
            $productData[] = [
                'name' => "Product $i",
                'purchase_price' => '12000',
                'sale_price' => '13000',
                'default_code' => "PR$i",
                'barcode_no' => "000$i",
                'batch_no' => '2310',
                'available_stock' => '100',
                'uom' => 'pcs',
                'vendor_id' => $i,
            ];
        }

        foreach ($productData as $product) {
            Product::create($product);
        }
    }
}
