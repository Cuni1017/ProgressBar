<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class CartController extends Controller
{
    function index(Request $request)
    {
        $cartItems = $this->getCartItems();
        // $cart = Cookie::get('cart');
        // $cart = $request->cookie('cart');

        // var_dump(($cart));
        // var_dump($cartItems);

        // Cookie::queue('cart', $cart, 1); //一分鐘沒用就刪除
        // $cart = json_encode($cart); //編碼
        return view('cart.index', [
            "cartItems" => $cartItems
        ]);
    }

    public function updateCookie(Request $request)
    {
        $cart = $this->getCartFromCookie();
        foreach ($cart as $productId => $currentQuantity) {
            $key = "product_" . $productId;
            if ($request->has($key)) {
                $cart[$productId] = $request->input($key);
            }
        }
        $cart = json_encode($cart, true);
        // Cookie::queue('cart', $cart); //會遇到http only的問題
        // https://laravel.com/docs/8.x/responses#attaching-cookies-to-responses
        // return response('Hello World')->cookie(
        //     'name', 'value', $minutes, $path, $domain, $secure, $httpOnly
        // );
        Cookie::queue(Cookie::make('cart', $cart, 60 * 24 * 7, null, null, false, false));

        return redirect()->route('cart.index');
    }

    private function getCartFromCookie()
    {
        $cart = Cookie::get('cart');
        // https://sites.google.com/site/phplearnmark/php/php-zhi-ling-qing-dan/json-han-shu/php-json_decode
        // https://sites.google.com/site/phplearnmark/php/php-zhi-ling-qing-dan/json-han-shu/php-json_encode
        // json_decode 解碼，接受一個JSON 格式的字符串並且把它轉換為PHP 變量

        return (!is_null($cart)) ? $cart = json_decode($cart, true) : [];
    }

    private function getCartItems()
    {
        // [id => quantity]
        $cart = $this->getCartFromCookie();
        // var_dump($cart);
        // array_value()是找值，回傳所有值的Array
        // array_map(function(參數){
        //     return 參數*參數 之類的 
        // },要被map的array)

        // [id]
        $productIds = array_keys($cart); //找$cart的key方法，會回傳$cart所有key的Array。
        // var_dump($productIds);

        // [
        //     [id => value, quantity => value]
        // ]
        $cartItems = array_map(function ($productId) use ($cart) {
            $quantity = $cart[$productId];
            $product = $this->getProduct($productId);
            if ($product) {
                return [
                    "product" => $product,
                    "quantity" => $quantity,
                ];
            } else {
                return null;
            }
        }, $productIds);
        // var_dump($cartItems);
        return $cartItems;
    }

    private function getProduct($id)
    {
        $products = $this->getProducts();
        foreach ($products as $product) {
            if ($product["id"] == $id) {
                return $product;
            }
        }
        return null;
    }

    private function getProducts()
    {
        return
            [
                [
                    "id" => 1,
                    "name" => "Apple",
                    "price" => 20,
                    "imageUrl" => asset('images/apple.jpg')
                ],
                [
                    "id" => 2,
                    "name" => "Orange",
                    "price" => 30,
                    "imageUrl" => asset('images/orange.jpg')
                ]
            ];
    }
}
