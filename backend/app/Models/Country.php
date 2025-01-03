<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;
    protected $fillable = [
        'Countryname',
        'Countrycode',
        'flag',
        'numbercode',
        "Cardimage",
        "GetVisaInDays",
        "price",
        "FAQ",
        'mandatory_docs',
        "countrystatus",
        "Age_lessthen_18",
        "Employed",
        "isFunded",
        "Self_employed",
        "Student",
        "pdf",

        'phone_number', 
    ];
    protected $casts = [
        'FAQ' => 'array',
        'countrystatus' => 'array',
        "Age_lessthen_18" => "array",
        'Employed' => 'array',
        'isFunded' => 'array',
        'Self_employed' => 'array',
        'Student' => 'array',
        'mandatory_docs' => 'array',

    ];

    public function visaType()
    {
        return $this->belongsTo(Visatype::class);
    }
}
