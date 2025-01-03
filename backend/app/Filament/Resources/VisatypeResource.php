<?php

namespace App\Filament\Resources;

use App\Filament\Resources\VisatypeResource\Pages;
use App\Filament\Resources\VisatypeResource\RelationManagers;
use App\Models\Visatype;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\TextColumn;

use App\Models\Country;
use Filament\Forms\Components\Select;
class VisatypeResource extends Resource
{
    protected static ?string $model = Visatype::class;

    protected static ?string $navigationIcon = 'heroicon-o-tag';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
 
                Select::make('country_id')
                ->label('Country Name')
                ->options(Country::all()->pluck('Countryname', 'id')) 
                ->searchable() 
                ->required(),
           
                TextInput::make('visa_type'), 
                TextInput::make('visa_duration'),
                TextInput::make('visa_validity'),
                TextInput::make('processing_time'),
                TextInput::make('pay_per_aduit'),


            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
                TextColumn::make('country.Countryname'),
                TextColumn::make('visa_type'),
                TextColumn::make('visa_duration'),
                TextColumn::make('visa_validity'),
                TextColumn::make('processing_time'),
                TextColumn::make('pay_per_aduit'),

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
            'index' => Pages\ListVisatypes::route('/'),
            'create' => Pages\CreateVisatype::route('/create'),
            'edit' => Pages\EditVisatype::route('/{record}/edit'),
        ];
    }
}
