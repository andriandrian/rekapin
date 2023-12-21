<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class SaleInvoice extends Model
{
    use HasFactory, Searchable;

    protected $guarded = [
        'id'
    ];

    protected $with = ['customer'];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'partner_id');
    }

    public function saleinvoiceorderlines()
    {
        return $this->hasMany(SaleOrderLine::class);
    }

    public static function generateSaleNumber()
    {
        $randomNumber = rand(1000, 9999);

        $saleNumber = 'INV-' . now()->format('Y/m/d/') . $randomNumber;

        return $saleNumber;
    }

    public static function boot()
    {
        parent::boot();
        static::creating(function ($saleInvoice) {
            $saleInvoice->invoice_no = self::generateSaleNumber();
        });
    }

    public function toSearchableArray(): array
    {
        return [
            'invoice_no' => $this->invoice_no,
        ];
    }
}
