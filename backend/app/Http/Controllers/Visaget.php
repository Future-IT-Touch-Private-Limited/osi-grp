<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Visatype;

class Visaget extends Controller
{
    //
    function GetVisa($country)
    {

        $res = Visatype::where("country_id", $country)->get();
        return $res;
    }
    function GetVisatype(Request $request)
    {

        $res = Visatype::where("country_id", $request->country)
            ->where("visa_type", $request->visaType)
            ->get(['id', 'visa_type', 'countryname', 'visa_duration', 'visa_validity', 'processing_time', 'pay_per_aduit', 'created_at', 'updated_at', 'country.country_id']);
        return $res;
    }
}
