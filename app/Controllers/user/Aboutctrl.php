<?php

namespace App\Controllers\user;

use App\Controllers\user\BaseController;


class Aboutctrl extends BaseController
{

    public function index()
    {
        return view('user/about/index');
    }
}
