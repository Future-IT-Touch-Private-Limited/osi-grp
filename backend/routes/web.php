<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;


Route::get('/', function () {
    return view('welcome');
});



Route::get('/runmigrate', function () {
    Artisan::call('migrate');
    return "Migrations have been run successfully!";
});

Route::get('/storagelink', function () {
    Artisan::call('storage:link');
    return "Storage link has been created successfully!";
});