@extends('layouts.app')

@section('content')
<h1>{{ $product['name'] }}</h1>
<img width="400" src="{{ $product['imageUrl'] }}" alt="">
<div>
    <p>Price: ${{ $product['price'] }}</p>
    <input type="number" name="quantity" min="1" value="1">
    <button id="addToCart" type="button">Add to cart</button>
</div>
@endsection

@section('inline_js')
@parent
<script>
    let productName = "{{ $product['name'] }}"
    let productId = "{{ $product['id'] }}"
    initAddToCart(productId)
</script>

@endsection