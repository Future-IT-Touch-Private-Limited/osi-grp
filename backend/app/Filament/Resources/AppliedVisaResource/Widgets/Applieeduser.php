<?php

namespace App\Filament\Resources\AppliedVisaResource\Widgets;

use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use App\Models\AppliedVisa;
class Applieeduser extends BaseWidget
{
    public function table(Table $table): Table
    {
        return $table
        ->query(AppliedVisa::query()) 
        ->columns([
            Tables\Columns\TextColumn::make('user.name')->label('User'),
            Tables\Columns\TextColumn::make('user.phonenumber')->label('Phone Number'),
            Tables\Columns\TextColumn::make('visaType.visa_type')->label('Visa Type'),
            Tables\Columns\TextColumn::make('country.Countryname')->label('Country'),
            Tables\Columns\TextColumn::make('created_at')->date()->label('Applied On'),
        ]);
    }
}
