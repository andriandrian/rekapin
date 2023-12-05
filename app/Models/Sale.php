<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;

    protected $fillable = [
        'partner_id',
        'date',
        'price_total',
        'memo',
    ];

    protected $with = ['customer'];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'partner_id');
    }

    public function saleorderlines()
    {
        return $this->hasMany(SaleOrderLine::class);
    }
}
