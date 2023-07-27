<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nombre' => fake()->text($maxNbChars = 10),
            'cantidad' => fake()->numberBetween($min=51),
            'estado' =>'A',
        ];
    }
}
