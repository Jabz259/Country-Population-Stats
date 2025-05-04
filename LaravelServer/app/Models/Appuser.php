<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appuser extends Model
{
    //define fields which can be safely filled and saved
    protected $fillable = ['first_name', 'last_name'] ;

    //columns and data are being created by the migration

    /** @use HasFactory<\Database\Factories\AppuserFactory> */
    use HasFactory;
}
