<?php

use Illuminate\Support\Facades\Route;

Route::get('/admin', function () {
    return view('admin');
});


Route::get('/', function () {
    return 'type admin in the url /admin to acces admin portal';
});