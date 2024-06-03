<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index() //前面可加public, private, protected，預設protected
    {
        $products = $this->getProducts();
        return view('product.index', ["products" => $products]);
    }

    public function create()
    {
        return view('product.create');
    }

    public function store(Request $request)
    {
        return redirect()->route('products.index');
    }



    function show($id, Request $request)
    {
        // $id = $request->input('id');

        $products = $this->getProducts();

        $apple = $products[0];
        $orange = $products[1];


        $index = $id - 1;
        // 如果超出商品數或是負數的話轉404
        if ($index < 0 || $index >= count($products)) {
            abort(404); //abort後就不會執行了
        }
        $product = $products[$index];
        return view('product.show', ["product" => $product]);


        // var_dump(($product));

        // $imageUrl = asset('images/cat.jpg');
    }

    public function edit($id)
    {
        $products = $this->getProducts();
        $index = $id - 1;
        if ($index < 0 || $index >= count($products)) {
            abort(404);
        }
        $product = $products[$index];

        return view('product.edit', ["product" => $product]);
    }

    public function update(Request $request, $id)
    {
        // $method = $request->method();
        // echo "update $method";

        $products = $this->getProducts();
        $index = $id - 1;
        if ($index < 0 || $index >= count($products)) {
            abort(404);
        }
        $product = $products[$index];

        return redirect()->route('products.edit', ['product' => $product['id']]);
    }

    public function destroy($id)
    {
        // echo "destroy";
        return redirect()->route('products.index');
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
