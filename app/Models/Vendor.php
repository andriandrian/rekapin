<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Vendor extends Model
{
    use HasFactory, Searchable;

    // protected $fillable=[
    //     'name',
    //     'phone',
    //     'email',
    //     'address',
    // ];

    protected $guarded = [
        'id'
    ];

    public function purchase()
    {
        return $this->hasMany(Purchase::class);
    }

    public function toSearchableArray(): array
    {
        return [
            'name' => $this->name,
        ];
    }
}
