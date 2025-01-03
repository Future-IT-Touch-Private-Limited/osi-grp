<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Countryblog;

class Countryblogcontroller extends Controller
{
    //
    function getblog($country)
    {
        $res = Countryblog::where("country", $country)->get();

        return $res;
    }
    function getallblog()
    {
        $res = Countryblog::all();

        return $res;
    }
}
