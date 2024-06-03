<form method="POST" action="{{ route('products.store') }}">
    @csrf
    <input type="text" name="title">
    <button type="submit">Submit</button>
</form>