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
            $table->string('sale_no')->unique();
            $table->date('date');
            $table->string('price_total');
            $table->string('memo')->nullable();
            $table->enum('status', ['Waiting', 'Proceed'])->default('Waiting');
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
