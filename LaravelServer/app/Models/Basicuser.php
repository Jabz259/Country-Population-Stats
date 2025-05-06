<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Basicuser extends Model
{
    protected $fillable = ['basic_user_first_name', 'basic_user_last_name', 'user_permission'];
    /** @use HasFactory<\Database\Factories\BasicuserFactory> */
    use HasFactory;
}
