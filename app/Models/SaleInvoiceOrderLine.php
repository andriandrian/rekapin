<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaleInvoiceOrderLine extends Model
{
    use HasFactory;

    protected $guarded = [
        'id'
    ];

    public function saleinvoice()
    {
        return $this->belongsTo(SaleInvoice::class, 'invoice_id');
    }

    public function product()
    {
        return $this->hasMany(Product::class, 'product_id');
    }
}
