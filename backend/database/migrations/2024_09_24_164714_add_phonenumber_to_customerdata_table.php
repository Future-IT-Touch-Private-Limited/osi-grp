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
        Schema::table('customerdatas', function (Blueprint $table) {
            $table->string('phonenumber')->nullable()->after('email'); // Add phonenumber column
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('customerdatas', function (Blueprint $table) {
            $table->dropColumn('phonenumber'); // Remove phonenumber column on rollback
        });
    }
};
