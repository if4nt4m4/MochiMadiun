<?php

namespace App\Controllers\user;

use App\Controllers\user\BaseController;


class Contactctrl extends BaseController
{

    public function index()
    {
        return view('user/contact/index');
    }
}
