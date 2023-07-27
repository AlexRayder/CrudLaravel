<?php

use App\Http\Controllers\ProductoController;
use App\Models\Producto;
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

/* 
   CODIGOS DE LARAVEL
   laravel new name
   php artisan route:list
   php artisan make:model Producto -mcrfs
   php artisan migrate
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/home', function () {
    return view('welcome');
});

Route::get('/productos', function () {
    return view('productos');
});
// Route::get('/producto', [ProductoController::class, 'index']);

// Route::post('/producto', [ProductoController::class, 'store']);

// Route::put('/producto/{producto}', [ProductoController::class, 'update']);

// Route::delete('/producto/{producto}', [ProductoController::class, 'destroy']);

Route::resource('/producto', ProductoController::class)->only('index', 'store', 'update', 'destroy');
