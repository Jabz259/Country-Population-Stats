<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\RegisterController;

//access blade admin center
//This will be dead simple layout
//dashboard
Route::get('/admin', [AdminController::class,'admin']);

//index
Route::get('/', [AdminController::class,'index']);
//test route
Route::get('/test', [AdminController::class,'test']);

//calling the register controller function and view
Route::get('/ar', [RegisterController::class,'register']);
Route::post('/ar', [RegisterController::class,'store']);

//serving our react build via below route
//not working yet
Route::view('/{path}','app') -> where ('path','*') -> name('react');