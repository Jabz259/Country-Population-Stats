<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Registeradmin;
use Illuminate\Support\Facades\Hash;
use PhpParser\Node\Stmt\TryCatch;

class RegisterController extends Controller
{
    //

    public function logout(){
        session() -> flush(); 
        return redirect("/admin/login");
    }

    public function login(Request $request)
    {
        return view("login");
    }
    public function authenticate(Request $request)
    {

        //This is usually the general logic for authenticated users from our database
        //I will need to check back to our blade file
        $username = $request->input("login_username");
        $password = $request->input("login_password");

        // Fetch the full user object using eloquent orm
        $admin = Registeradmin::where('username', $username)->first();
        //accessing password col from admin db object using query builder
        $adminPassword = $admin -> password;

        //using the salt from stored password to hash input
        //then check if they match
        //if $admin is true (there is a record) return true and satisfy condition
        //if $admin returns nothing return false and doesnt satisfy the conditon
        if ($admin && Hash::check($password, $adminPassword)) {
            //create a session
            session(['user_id' => $admin->id]);

            session()->put([
                'id' => $admin->id,
                'first_name' => $admin->first_name,
                'last_name' => $admin->last_name,
                'email' => $admin->email
            ]);


            return redirect('/admin/dashboard');
        } else {
            return "login has failed, there was nothing found in the database";
        }

    }

    public function register()
    {
        return view("register");
    }

    public function store(Request $request)
    {

        $firstName = $request->input("first_name");
        $lastName = $request->input("last_name");
        $email = $request->input("email");
        $username = $request->input("username");
        $password = Hash::make($request->input("password"));


        Registeradmin::create([
            "first_name" => $firstName,
            "last_name" => $lastName,
            "username" => $username,
            "email" => $email,
            "password" => $password,
        ]);

        return redirect('/admin/login');
    }
}