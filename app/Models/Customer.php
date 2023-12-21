<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Customer extends Model
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

    public function sale()
    {
        return $this->hasMany(Sale::class, 'partner_id');
    }

    public function toSearchableArray(): array
    {
        return [
            'name' => $this->name,
        ];
    }
}
