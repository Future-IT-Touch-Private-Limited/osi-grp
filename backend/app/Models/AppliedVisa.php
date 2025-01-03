<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppliedVisa extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'country_id',
        'visa_type_id',
        'applied_at',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(Customerdata::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function visaType()
    {
        return $this->belongsTo(Visatype::class);
    }
    
}
