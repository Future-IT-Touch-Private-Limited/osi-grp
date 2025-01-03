<?php

namespace App\Http\Controllers;
use App\Models\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    //
function getCountry(){
    $res=Country::all();
    return $res;
}

function getsinglecountry($country){
    $res=Country::where("Countryname",$country)->get();
    return $res;
}

}
