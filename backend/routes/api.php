<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\Visaget;
use App\Http\Controllers\CustomerdataController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\Countryblogcontroller;

use App\Http\Controllers\AppliedVisaController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get("/v1/country",[CountryController::class,"getCountry"]);
Route::get("/v1/country/{country}",[CountryController::class,"getsinglecountry"]);

Route::get("/v1/visa/{country}",[Visaget::class,"GetVisa"]);
Route::post("/v1/visa-type",[Visaget::class,"GetVisatype"]);
Route::post("/v1/signup",[CustomerdataController::class,"signup"]);
Route::post("/v1/login",[CustomerdataController::class,"login"]);
Route::get("/v1/testimonial",[TestimonialController::class,"Testimonial"]);
Route::get("/v1/blog/{country}",[Countryblogcontroller::class,"getblog"]);
Route::get("/v1/blog/",[Countryblogcontroller::class,"getallblog"]);


Route::apiResource('/v1/appliedvisas', AppliedVisaController::class);

