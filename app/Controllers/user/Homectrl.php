<?php

namespace App\Controllers\user;

use App\Controllers\user\BaseController;


class Homectrl extends BaseController
{

    

    public function index()
    {

        return view('user/home/index');
    }

    public function redirectToHome()
    {
        return redirect()->to('user/home');
    }

    public function language($locale)
    {
        $session = session();

        // Validasi bahasa yang diterima
        if ($locale === 'in' || $locale === 'en') {
            // Mengatur sesi bahasa ke bahasa yang dipilih
            $session->set('lang', $locale);
        }

        // Redirect kembali ke halaman sebelumnya
        return redirect()->back();
    }
}
