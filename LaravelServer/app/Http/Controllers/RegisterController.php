<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Registeradmin;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    //

    public function TestLoginLogic(Request $request) {

        //This is usually the general logic for authenticated users from our database
        //I will need to check back to our blade file

        $username = $request->input("login_username");
        $password = Hash::make($request->input("login_password"));

        $adminUsername = Registeradmin::where('first_name', $username)->first();
        $adminPassword = Registeradmin::where('password', $password)->first();

        if ($username == $adminUsername && $adminPassword == $adminPassword) {
            return "login has worked, there was a match found";
        } else {
            return "login has failed, there was nothing found in the database";

        }

    }

    public function login(Request $request) {

        return view("login");
    }

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