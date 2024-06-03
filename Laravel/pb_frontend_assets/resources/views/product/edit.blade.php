<form method="POST" action="{{ route('products.update',['product' => $product['id']]) }}">
    @csrf
    @method('PATCH') <!-- 方式一 -->
    <!-- <input type="hidden" name="_method" value="PATCH"> --> <!-- 方式二 -->
    <input type="text" name="title">
    <button type="submit">Submit</button>
</form>