@extends('layouts.app')

@section('content')
<h1>Products Page</h1>
<div><a href="{{ route('products.create') }}">Create</a></div>
<hr>
@foreach ($products as $product)
<div>
    <a href="{{ route('products.show',['product' => $product['id']]) }}">
        <img width="400" src="{{ $product['imageUrl'] }}" alt=""><br>
    </a>
    <a href="{{ route('products.edit',['product' => $product['id']]) }}">Edit</a>
    <form method="POST" action="{{ route('products.destroy',['product' => $product['id']]) }}">
        @csrf
        @method('DELETE') <!-- 方式一 -->
        <!-- <input type="hidden" name="_method" value="PATCH"> --> <!-- 方式二 -->
        <button type="submit">delete</button>
    </form>
    <hr>
</div>
@endforeach

@endsection

@section('inline_js')
@parent
@endsection