<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {   
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->foreignId('category_id')->constrained()->cascadeOnDelete();
            $table->float('price')->unsigned();
            $table->float('discount')->unsigned();
            $table->float('discounted_price')->unsigned();
            $table->float('ratings')->unsigned();
            $table->unsignedInteger('reviews');
            $table->json('sizes');
            $table->boolean('has_stock');
            $table->text('description');
            $table->text('imageurl');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
