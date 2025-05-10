<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\DashboardController;

//access blade admin center
//This will be dead simple layout
//dashboard
Route::get('/admin', [AdminController::class, 'admin']);

//index
Route::get('/', [AdminController::class, 'index']);
//test route
Route::get('/test', [AdminController::class, 'test']);

/////////////////////////////////////////////////////////////////////////////

//calling the register controller function and view
Route::get('/admin/register', [RegisterController::class, 'register']);
Route::post('/admin/register', [RegisterController::class, 'store']);
//login routes
Route::get('/admin/login', [RegisterController::class, 'login']);
Route::post('/admin/login', [RegisterController::class, 'authenticate']);
//log user out
Route::post('/admin/logout/user', [RegisterController::class,'logout']);
//dashboard
Route::get('/admin/dashboard', [DashboardController::class, 'dashboard'])
    ->middleware(\App\Http\Middleware\AuthenticationIsValid::class);

//serving our react build via below route
//not working yet
Route::view('/{path}', 'app')->where('path', '*')->name('react');