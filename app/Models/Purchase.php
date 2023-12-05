<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    use HasFactory;

    protected $fillable = [
        'partner_id',
        'date',
        'price_total',
        'memo',
    ];

    protected $with = ['vendor'];

    public function vendor()
    {
        return $this->belongsTo(Partner::class, 'partner_id');
    }

    public function purchaseorderlines()
    {
        return $this->hasMany(PurchaseOrderLine::class, 'purchase_id');
    }
}
