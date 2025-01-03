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
        Schema::table('visatypes', function (Blueprint $table) {
            $table->string('countryname')->nullable()->change(); // Make 'countryname' nullable
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('visatypes', function (Blueprint $table) {
            $table->string('countryname')->nullable(false)->change(); // Revert to non-nullable in case of rollback
        });
    }
};
