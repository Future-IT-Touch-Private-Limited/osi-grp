<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customerdata extends Model
{
    use HasFactory;
  
    protected $fillable = [
        'name',
        'email',
        'password',
        'phonenumber'
    ];

    protected function casts(): array
    {
        return [
          
            'password' => 'hashed',
        ];
    }


}
