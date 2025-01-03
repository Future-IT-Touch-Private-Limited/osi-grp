<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visatype extends Model
{
    use HasFactory;
    protected $fillable = [
       
        'visa_type',
        'Countryname',
        'visa_duration',
        'visa_validity',
        "processing_time",
        "pay_per_aduit",
        'country_id'
      
       
    ];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }


}
