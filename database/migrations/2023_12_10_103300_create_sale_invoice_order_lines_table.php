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
        Schema::create('sale_invoice_order_lines', function (Blueprint $table) {
            $table->id();
            $table->foreignId('invoice_id')->constrained('sale_invoices')->onUpdate('cascade')->onDelete('cascade'); // 'saleinvoices' is the table name of 'saleinvoices'
            $table->foreignId('product_id')->constrained('products')->onUpdate('cascade')->onDelete('cascade'); // 'products' is the table name of 'products
            $table->integer('product_quantity')->default(0);
            $table->integer('discount')->default(0);
            $table->integer('discount_percent')->default(0);
            $table->integer('subtotal')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sale_invoice_order_lines');
    }
};
