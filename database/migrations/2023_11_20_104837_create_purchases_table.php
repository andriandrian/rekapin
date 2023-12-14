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
        Schema::create('purchases', function (Blueprint $table) {
            $table->id();
            $table->foreignId('partner_id')->constrained('vendors')->onUpdate('cascade')->onDelete('cascade'); // 'vendors' is the table name of 'partners'
            $table->string('purchase_no')->unique();
            $table->date('date');
            $table->string('price_total');
            $table->string('memo')->nullable();
            $table->enum(
                'status',
                ['unpaid', 'paid']
            )->default('unpaid');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchases');
    }
};
