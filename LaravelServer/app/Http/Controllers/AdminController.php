<?php

namespace App\Http\Controllers;

class AdminController extends Controller {
   

    public function admin () { 
        return view("admin");
    }

    public function index () {
        return "return 'type admin in the url /admin to acces admin portal";
    }

    public function test () {
        return "hello there this is a test route";
    }
}

