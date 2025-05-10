<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{

    
    public function dashboard(){

        $userID = session() -> get('id');
        $firstName = session()->get('first_name');
        $lastName = session()->get('last_name');
        $email = session()->get('email');

        return view("dashboard",
        ["firstName"=> $firstName,
        "lastName"=> $lastName,
        "email"=> $email,
        "userID"=> $userID,
         ]);
    }


}
