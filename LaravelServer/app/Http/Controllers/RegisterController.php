<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Registeradmin;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    //
    public function register () { 
        return view("register");
    }

    public function store (Request $request) { 


        
        $firstName = $request->input("first_name");
        $lastName = $request->input("last_name");
        $email = $request->input("email");
        $username = $request->input("username");
        $password = Hash::make($request->input("password"));
        

        Registeradmin::create([
            "first_name" => $firstName,
            "last_name" => $lastName,
            "username"=> $username,
            "email"=> $email,
            "password"=>$password ,
            ]);

        return "data stored successfully";
    }
}