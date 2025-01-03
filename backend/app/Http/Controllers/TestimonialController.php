<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Testimonial;

class TestimonialController extends Controller
{
    //
    function Testimonial()
    {

        $res = Testimonial::all();

        return $res;
    }
}
