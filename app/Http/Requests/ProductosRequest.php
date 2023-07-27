<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductosRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nombre'=>'required|min:1|max:20|unique:productos',
            'cantidad'=>'required|numeric|min:1|max:100',
        ];
    }
    public function messages()
    {
        return [
    
            'required'=>"El campo :attribute es obligatorio",
            'max'=>"El campo :attribute es mayor a :max",
            'min'=>"El campo :attribute es menor a :min",
            'numeric'=>"El campo :attribute debe ser de tipo numerico",
            'unique'=>"El campo :attribute ya existe",
            
        ];
    }



}
