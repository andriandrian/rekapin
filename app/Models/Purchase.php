<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
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

    protected $with = ['vendor'];

    public function vendor()
    {
        return $this->belongsTo(Vendor::class, 'partner_id');
    }

    public function purchaseorderlines()
    {
        return $this->hasMany(PurchaseOrderLine::class, 'purchase_id');
    }

    public static function generatePurchaseNumber()
    {
        // Hitung jumlah penjualan pada bulan ini
        // Generate a 4-digit random number
        $randomNumber = rand(1000, 9999);

        // Create sale number with format SO-YYYYMM-RandomNumber
        $purchaseNumber = 'PO-' . now()->format('Y/m/d/') . $randomNumber;

        return $purchaseNumber;
    }

    // ...

    public static function boot()
    {
        parent::boot();

        // Register the creating event to generate the sale_no before saving
        static::creating(function ($purchase) {
            $purchase->purchase_no = self::generatePurchaseNumber();
        });
    }
}
