<?php

namespace App\Controllers\user;

use App\Controllers\user\BaseController;


class Produk extends BaseController
{

    public function index()
    {
        return view('user/produk/index');
    }

    public function detail()
    {
        return view('user/produk/detail');
    }
}
