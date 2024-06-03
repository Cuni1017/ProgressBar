<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/pb', [PageController::class, "pb"]);

// Route::get('/products/{id}', [ProductController::class, "show"])->where('id', '[0-9]+');
// where後面可以加這個(id,regex)來規範網址，如果不在規範內會回404
Route::resource('/products', ProductController::class);
Route::resource('/orders', OrderController::class); //自動引入show, create, store等等方法，可以跟make:controller --resource 配套

Route::patch('/cart/cookie', [CartController::class, "updateCookie"])->name('cart.cookie.update');
Route::resource('/cart', CartController::class);



// https://onlinephp.io/
// <?php
// $stus = [
// 	"劉明偉"=>
//     [
//         "id" => 3,
//         "name" => "apple",
//     ],
//     "林晅緯"=>
//         [
//         "id" => 4,
//         "name" => "banana",
//     ]
// ];
// var_dump($array);

// foreach($stus as $stu){
//      //echo $key['name'];
//      echo $stu['name'];
//      //echo $value['id'];
//      //echo $stu['id'];
//      //echo $value['id'];
// }