<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;

    // protected $fillable = [
    //     'partner_id',
    //     'date',
    //     'price_total',
    //     'memo',
    // ];

    protected $guarded = [
        'id'
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

    public static function generateSaleNumber()
    {
        // Hitung jumlah penjualan pada bulan ini
        // Generate a 4-digit random number
        $randomNumber = rand(1000, 9999);

        // Create sale number with format SO-YYYYMM-RandomNumber
        $saleNumber = 'SO-' . now()->format('Y/m/d/') . $randomNumber;

        return $saleNumber;
    }

    // ...

    public static function boot()
    {
        parent::boot();

        // Register the creating event to generate the sale_no before saving
        static::creating(function ($sale) {
            $sale->sale_no = self::generateSaleNumber();
        });
    }
}
