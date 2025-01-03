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
        //
        Schema::table('countries', function (Blueprint $table) {
            $table->json('countrystatus')->nullable(); // Add JSON column for key-value pairs
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::table('countries', function (Blueprint $table) {
            $table->dropColumn('countrystatus');
        });
    }
};
