<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registeradmin extends Model
{

    protected $fillable = ['first_name', 'last_name', 'username', 'email','password'];

   
    /** @use HasFactory<\Database\Factories\RegisteradminFactory> */
    use HasFactory;
}
