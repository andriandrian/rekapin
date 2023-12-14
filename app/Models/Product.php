<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    // protected $fillable = [
    //     'name',
    //     'purchase_price',
    //     'sale_price',
    //     'default_code',
    //     'barcode_no',
    //     'batch_no',
    //     'available_stock',
    //     'uom',
    //     'vendor_id',
    // ];

    protected $guarded = [
        'id'
    ];

    protected $with = ['vendor'];

    public function vendor()
    {
        return $this->belongsTo(Vendor::class, 'vendor_id');
    }
}
