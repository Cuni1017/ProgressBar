<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    function pb(Request $request)
    {
        $level = 51;
        // $version = $_GET['version']; //方式一
        $version = $request->input('version'); //方式二


        $myrequest = $request;
        echo $myrequest;
        echo "<br/>";



        return view('pb', ['version' => $version, 'level' => $level]);
        // 
    }
}
