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
        Schema::create('applied_visas', function (Blueprint $table) {
            $table->id();
            // Change user_id to reference the customerdatas table
            $table->foreignId('user_id')->constrained('customerdatas')->onDelete('cascade'); 
            $table->foreignId('country_id')->constrained()->onDelete('cascade'); // References countries table
            $table->foreignId('visa_type_id')->constrained('visatypes')->onDelete('cascade'); // References visatypes table
            $table->timestamp('applied_at')->nullable(); // When the user applied for the visa
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending'); // Visa application status
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applied_visas');
    }
};
