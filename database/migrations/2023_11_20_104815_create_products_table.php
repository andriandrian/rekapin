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
            $table->foreignId('vendor_id')->constrained('vendors')->onUpdate('cascade')->onDelete('cascade'); // 'vendors' is the table name of 'partners
            $table->string('name');
            $table->string('purchase_price');
            $table->string('sale_price');
            $table->string('default_code')->unique()->nullable();
            $table->string('barcode_no')->unique()->nullable();
            $table->string('batch_no')->nullable();
            $table->string('available_stock')->nullable();
            $table->string('uom')->nullable();
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
