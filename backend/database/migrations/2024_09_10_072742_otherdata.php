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
            $table->json('Age_lessthen_18')->nullable();
            $table->json('Employed')->nullable();
            $table->json('isFunded')->nullable();
            $table->json('Self_employed')->nullable();
            $table->json('Student')->nullable();  // Add JSON column for key-value pairs
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::table('countries', function (Blueprint $table) {
         
            $table->dropColumn('Age_lessthen_18');
            $table->dropColumn('Employed');
            $table->dropColumn('isFunded');
            $table->dropColumn('Self_employed');
            $table->dropColumn('Student');
        });
    }
};
