@extends('layouts.app')

@section('content')
{{$level}} <br>
{{$version}}
<h1>PB Page</h1>
@endsection

@section('inline_js')
@parent
@endsection