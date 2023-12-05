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
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->foreignId('partner_id')->constrained('customers')->onUpdate('cascade')->onDelete('cascade'); // 'customers' is the table name of 'partners
            $table->foreignId('product_id')->constrained('products')->onUpdate('cascade')->onDelete('cascade'); // 'products' is the table name of 'products
            $table->date('date');
            $table->string('price_total');
            $table->string('memo')->nullable();
            $table->enum('status', ['draft', 'confirm', 'done', 'cancel'])->default('draft');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales');
    }
};
