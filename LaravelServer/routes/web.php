<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

//access blade admin center
//This will be dead simple layout
//dashboard
Route::get('/admin', [AdminController::class,'admin']);

//index
Route::get('/', [AdminController::class,'index']);
//test route
Route::get('/test', [AdminController::class,'test']);



//serving our react build via below route
//not working yet
Route::view('/{path}','app') -> where ('path','*') -> name('react');