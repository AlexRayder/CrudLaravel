<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductosRequest;
use App\Models\Producto;
use Illuminate\Http\Request;


class ProductoController extends Controller
{
/*
    public function __construct(){
      /*  $this->middleware('cant',['only' => ['store']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Se encarga de traer todos lo datos de la tabla
        return Producto::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductosRequest $request)
    {       
        //Se encarga de subir datos a la tabla
        Producto::create($request->all());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Producto $producto)
    {
        //Se encaraga de modificar los datos de la tabla
        Producto::findOrFail($request->id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Producto $producto)
    {
        //Se encarga de borrar los datos especificos de una tabla
        Producto::findOrFail($producto->id)->delete();
    }
}
