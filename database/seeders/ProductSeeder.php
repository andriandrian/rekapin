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
            // 'available_stock' => '780',
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
            // 'available_stock' => '3100',
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
            // 'available_stock' => '2500',
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
            // 'available_stock' => '802',
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
            // 'available_stock' => '1207',
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
            // 'available_stock' => '978',
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
            // 'available_stock' => '125',
            'uom' => 'pcs',
            'vendor_id' => 1,
        ]);

        Product::create([
            'name' => 'Lang Kayu Putih 15ml (576pcs/crt)',
            'purchase_price' => '5000',
            'sale_price' => '5457',
            'default_code' => 'Lang15',
            'barcode_no' => '8993176110098',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 6,
        ]);


        Product::create([
            'name' => 'Lang Kayu Putih 30ml (288pcs/crt)',
            'purchase_price' => '9000',
            'sale_price' => '9990',
            'default_code' => 'Lang30',
            'barcode_no' => '8993176110081',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 6,
        ]);


        Product::create([
            'name' => 'Lang Kayu Putih 60ml (144pcs/crt)',
            'purchase_price' => '17240',
            'sale_price' => '19240',
            'default_code' => 'Lang60',
            'barcode_no' => '8993176110074',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 6,
        ]);


        Product::create([
            'name' => 'Lang Kayu Putih 120ml (144pcs/crt)',
            'purchase_price' => '35092',
            'sale_price' => '37092',
            'default_code' => 'Lang120',
            'barcode_no' => '8993176110067',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 6,
        ]);

        Product::create([
            'name' => 'Lang Kayu Putih 210ml (48pcs/crt)',
            'purchase_price' => '60993',
            'sale_price' => '62993',
            'default_code' => 'Lang210',
            'barcode_no' => '8993176811694',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 6,
        ]);

        Product::create([
            'name' => 'Siang Pure Oil 3ml (576pcs/crt)',
            'purchase_price' => '13651',
            'sale_price' => '15651',
            'default_code' => 'SIANGOIL3',
            'barcode_no' => '8850109001130',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 7,
        ]);

        Product::create([
            'name' => 'Siang Pure Oil 7ml (360pcs/crt)',
            'purchase_price' => '24307',
            'sale_price' => '26307',
            'default_code' => 'SIANGOIL7',
            'barcode_no' => '8850109001123',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 7,
        ]);

        Product::create([
            'name' => 'Siang Pure Oil 25ml (144pcs/crt)',
            'purchase_price' => '75478',
            'sale_price' => '77478',
            'default_code' => 'SIANGOIL25',
            'barcode_no' => '8850109001116',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 7,
        ]);

        Product::create([
            'name' => 'Pil Chi Kit Tablet (100pcs/crt)',
            'purchase_price' => '39292',
            'sale_price' => '41292',
            'default_code' => 'PILCHIKIT',
            'barcode_no' => '95502502',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 7,
        ]);

        Product::create([
            'name' => 'Antangin JRG Cair (30box/crt)',
            'purchase_price' => '33116',
            'sale_price' => '35116',
            'default_code' => 'ANTJRGCAIR',
            'barcode_no' => '8992003782354',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'box',
            'vendor_id' => 8,
        ]);

        Product::create([
            'name' => 'Antangin JRG Tablet (50box/crt)',
            'purchase_price' => '58545',
            'sale_price' => '60545',
            'default_code' => 'ANTJRGTBLT',
            'barcode_no' => '8992003170403',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'box',
            'vendor_id' => 8,
        ]);

        Product::create([
            'name' => 'Komix Jahe (50box/crt)',
            'purchase_price' => '40320',
            'sale_price' => '42320',
            'default_code' => 'KMXJ',
            'barcode_no' => '8993058300500',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'box',
            'vendor_id' => 9,
        ]);

        Product::create([
            'name' => 'Komix Jeruk nipis (50box/crt)',
            'purchase_price' => '40320',
            'sale_price' => '42320',
            'default_code' => 'KMXJN',
            'barcode_no' => '8993058300807',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'box',
            'vendor_id' => 9,
        ]);

        Product::create([
            'name' => 'Komix OBH Madu (50box/crt)',
            'purchase_price' => '40320',
            'sale_price' => '42320',
            'default_code' => 'KMXM',
            'barcode_no' => '8993058301200',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'box',
            'vendor_id' => 9,
        ]);

        Product::create([
            'name' => 'Komix Peppermint (50box/crt)',
            'purchase_price' => '40320',
            'sale_price' => '42320',
            'default_code' => 'KMXP',
            'barcode_no' => '8993058300401',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'box',
            'vendor_id' => 9,
        ]);

        Product::create([
            'name' => 'Tempra Syrup 30ml (48box/crt)',
            'purchase_price' => '19200',
            'sale_price' => '21200',
            'default_code' => 'TMPRSYP30',
            'barcode_no' => '8995201800096',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 9,
        ]);

        Product::create([
            'name' => 'Tempra Syrup 60ml (24box/crt)',
            'purchase_price' => '38600',
            'sale_price' => '40600',
            'default_code' => 'TMPRSYP60',
            'barcode_no' => '8995201800097',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 9,
        ]);

        Product::create([
            'name' => 'Tempra Syrup 100ml (12box/crt)',
            'purchase_price' => '41460',
            'sale_price' => '43460',
            'default_code' => 'TMPRSYP100',
            'barcode_no' => '8995201800098',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 9,
        ]);

        Product::create([
            'name' => 'Tempra Syrup Forte 60ml (24box/crt)',
            'purchase_price' => '42800',
            'sale_price' => '44800',
            'default_code' => 'TMPRSYPFRT60',
            'barcode_no' => '8995201800141',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 9,
        ]);

        Product::create([
            'name' => 'Tempra Drop Grape 15ml (30box/crt)',
            'purchase_price' => '41400',
            'sale_price' => '43400',
            'default_code' => 'TMPRDRPGRP',
            'barcode_no' => '8995201800080',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 9,
        ]);

        Product::create([
            'name' => 'Tempra Drop Strawberry 15ml (30box/crt)',
            'purchase_price' => '41400',
            'sale_price' => '43400',
            'default_code' => 'TMPRDRPSTB',
            'barcode_no' => '8995201801650',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 9,
        ]);

        Product::create([
            'name' => 'Neurobion Tablet 30s',
            'purchase_price' => '60700',
            'sale_price' => '64700',
            'default_code' => 'Neurobi30',
            'barcode_no' => '8994573590391',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 10,
        ]);

        Product::create([
            'name' => 'Neurobion Tablet 50s',
            'purchase_price' => '102800',
            'sale_price' => '107800',
            'default_code' => 'Neurobi50',
            'barcode_no' => '8994573000050',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 10,
        ]);

        Product::create([
            'name' => 'Neurobion Tablet 250s',
            'purchase_price' => '533900',
            'sale_price' => '538900',
            'default_code' => 'Neurobi250',
            'barcode_no' => '8994573590152',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 10,
        ]);

        Product::create([
            'name' => 'Neurobion Forte Tablet 30s',
            'purchase_price' => '113104',
            'sale_price' => '118104',
            'default_code' => 'NeurobiFRT30',
            'barcode_no' => '8994573590407',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 10,
        ]);

        Product::create([
            'name' => 'Neurobion Forte Tablet 50s',
            'purchase_price' => '122800',
            'sale_price' => '127800',
            'default_code' => 'NeurobiFRT50',
            'barcode_no' => '8994573200050',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 10,
        ]);

        Product::create([
            'name' => 'Neurobion Forte Tablet 250s',
            'purchase_price' => '980941',
            'sale_price' => '983941',
            'default_code' => 'NeurobiFRT250',
            'barcode_no' => '8994573590162',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 10,
        ]);

        Product::create([
            'name' => 'Sanmol Syrup 60ml (24pcs/crt)',
            'purchase_price' => '15760',
            'sale_price' => '17760',
            'default_code' => 'SNMLSYRP60',
            'barcode_no' => '45454545',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 5,
        ]);

        Product::create([
            'name' => 'Sanmol Drop 15ml (30pcs/crt)',
            'purchase_price' => '17370',
            'sale_price' => '19370',
            'default_code' => 'SNMLDRP15',
            'barcode_no' => '5454545',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 5,
        ]);

        Product::create([
            'name' => 'Sanmol Tablet (30pcs/crt)',
            'purchase_price' => '44620',
            'sale_price' => '46620',
            'default_code' => 'SNMLTBLT15',
            'barcode_no' => '545454',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 5,
        ]);

        Product::create([
            'name' => 'SanaFlu Tablet (40pcs/crt)',
            'purchase_price' => '55500',
            'sale_price' => '57500',
            'default_code' => 'SANAFLU',
            'barcode_no' => '8993008125047',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 5,
        ]);

        Product::create([
            'name' => 'Tonikum Bayer 100ml (12pcs/crt)',
            'purchase_price' => '10250',
            'sale_price' => '12250',
            'default_code' => 'TNKMBYR100',
            'barcode_no' => '8994591007123',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 4,
        ]);

        Product::create([
            'name' => 'Tonikum Bayer 330ml (12pcs/crt)',
            'purchase_price' => '26650',
            'sale_price' => '28650',
            'default_code' => 'TNKMBYR330',
            'barcode_no' => '8994591007116',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 4,
        ]);

        Product::create([
            'name' => 'UltraFlu Tablet (40pcs/crt)',
            'purchase_price' => '70,200',
            'sale_price' => '72,200',
            'default_code' => 'ULTRAFLU',
            'barcode_no' => '8997014050225',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 4,
        ]);

        Product::create([
            'name' => 'Neozep Forte Tab (48pcs/crt)',
            'purchase_price' => '54800',
            'sale_price' => '56800',
            'default_code' => 'NEOFRTETAB',
            'barcode_no' => '8992112014018',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 3,
        ]);

        Product::create([
            'name' => 'Paratusin Tablet (36pcs/crt)',
            'purchase_price' => '245800',
            'sale_price' => '250800',
            'default_code' => 'PARTAB',
            'barcode_no' => '123456789',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 3,
        ]);

        Product::create([
            'name' => 'Paratusin Syrup 60ml (24pcs/crt)',
            'purchase_price' => '29700',
            'sale_price' => '31700',
            'default_code' => 'PARSYRP',
            'barcode_no' => '987654321',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 3,
        ]);

        Product::create([
            'name' => 'Stop Cold (52pcs/crt)',
            'purchase_price' => '35839',
            'sale_price' => '35839',
            'default_code' => 'STPCLD',
            'barcode_no' => '899809400031',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 3,
        ]);

        Product::create([
            'name' => 'Insto 7.5ml (144pcs/crt)',
            'purchase_price' => '10700',
            'sale_price' => '12700',
            'default_code' => 'INSTO75',
            'barcode_no' => '8885015220061',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 2,
        ]);

        Product::create([
            'name' => 'Insto 15ml (144pcs/crt)',
            'purchase_price' => '17250',
            'sale_price' => '19250',
            'default_code' => 'INSTO15',
            'barcode_no' => '8885015220085',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 2,
        ]);

        Product::create([
            'name' => 'Insto Cool 7.5 (144pcs/crt)',
            'purchase_price' => '11950',
            'sale_price' => '13950',
            'default_code' => 'INSTOC75',
            'barcode_no' => '8885015220306',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 2,
        ]);

        Product::create([
            'name' => 'Insto Dry Eye Moist (144pcs/crt)',
            'purchase_price' => '11655',
            'sale_price' => '13655',
            'default_code' => 'INSTODEM',
            'barcode_no' => '8885015220078',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 2,
        ]);

        Product::create([
            'name' => 'OBH Combi Junior Apple 60ml (48pcs/crt)',
            'purchase_price' => '12700',
            'sale_price' => '15700',
            'default_code' => 'OBHCJA',
            'barcode_no' => '8993113270052',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 2,
        ]);

        Product::create([
            'name' => 'OBH Combi Junior Honey 60ml(48pcs/crt)',
            'purchase_price' => '13700',
            'sale_price' => '15700',
            'default_code' => 'OBHCJH',
            'barcode_no' => '89931130370512',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 2,
        ]);

        Product::create([
            'name' => 'OBH Combi Junior Orange 60ml (48pcs/crt)',
            'purchase_price' => '13700',
            'sale_price' => '15700',
            'default_code' => 'OBHCJO',
            'barcode_no' => '8993113044059',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 2,
        ]);

        Product::create([
            'name' => 'OBH Combi Junior Strawberry 60ml (48pcs/crt)',
            'purchase_price' => '13700',
            'sale_price' => '15700',
            'default_code' => 'OBHCJS',
            'barcode_no' => '8993113042005',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 2,
        ]);

        Product::create([
            'name' => 'OBH Combi Ginger 60ml (48pcs/crt)',
            'purchase_price' => '11930',
            'sale_price' => '13930',
            'default_code' => 'OBHCG60',
            'barcode_no' => '8993113351058',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 2,
        ]);

        Product::create([
            'name' => 'OBH Combi Mentol 60ml (48pcs/crt)',
            'purchase_price' => '11930',
            'sale_price' => '13930',
            'default_code' => 'OBHCM60',
            'barcode_no' => '8993113032056',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 2,
        ]);

        Product::create([
            'name' => 'OBH Combi Honey 60ml (48pcs/crt)',
            'purchase_price' => '13700',
            'sale_price' => '15700',
            'default_code' => 'OBHCH60',
            'barcode_no' => '8993113037051',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 2,
        ]);

        Product::create([
            'name' => 'OBH Combi Ginger 100ml (48pcs/crt)',
            'purchase_price' => '17980',
            'sale_price' => '18980',
            'default_code' => 'OBHCG100',
            'barcode_no' => '8993113352055',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 2,
        ]);

        Product::create([
            'name' => 'OBH Combi Mentol 100ml (48pcs/crt)',
            'purchase_price' => '17980',
            'sale_price' => '18980',
            'default_code' => 'OBHCM100',
            'barcode_no' => '8993113031059',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 2,
        ]);

        Product::create([
            'name' => 'OBH Combi Honey 100ml (48pcs/crt)',
            'purchase_price' => '16980',
            'sale_price' => '18980',
            'default_code' => 'OBHCH100',
            'barcode_no' => '8993113036054',
            'batch_no' => '1',
            // 'available_stock' => '1',
            'uom' => 'pcs',
            'vendor_id' => 2,
        ]);
        // $productData = [];

        // for ($i = 1; $i <= 25; $i++) {
        //     $productData[] = [
        //         'name' => "Product $i",
        //         'purchase_price' => '12000',
        //         'sale_price' => '13000',
        //         'default_code' => "PR$i",
        //         'barcode_no' => "000$i",
        //         'batch_no' => '2310',
        //         'available_stock' => '100',
        //         'uom' => 'pcs',
        //         'vendor_id' => $i,
        //     ];
        // }

        // foreach ($productData as $product) {
        //     Product::create($product);
        // }
    }
}
