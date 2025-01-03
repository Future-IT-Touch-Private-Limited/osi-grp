<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AppliedVisaResource\Pages;
use App\Filament\Resources\AppliedVisaResource\RelationManagers;
use App\Models\AppliedVisa;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AppliedVisaResource extends Resource
{
    protected static ?string $model = AppliedVisa::class;

    protected static ?string $navigationIcon = 'heroicon-o-users';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
             
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('user.name')->label('User'),
                Tables\Columns\TextColumn::make('user.phonenumber')->label('Phone Number'),
                Tables\Columns\TextColumn::make('visaType.visa_type'),
                Tables\Columns\TextColumn::make('country.Countryname'),
                Tables\Columns\TextColumn::make('created_at')->date(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAppliedVisas::route('/'),
            'create' => Pages\CreateAppliedVisa::route('/create'),
            'edit' => Pages\EditAppliedVisa::route('/{record}/edit'),
        ];
    }
}
