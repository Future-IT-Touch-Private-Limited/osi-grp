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
        Schema::create('visatypes', function (Blueprint $table) {
            $table->id();
            $table->string("visa_type");
            $table->string("countryname");
            $table->string("visa_duration");
            $table->string("visa_validity");
            $table->string("processing_time");
            $table->string("pay_per_aduit");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('visatypes');
    }
};
