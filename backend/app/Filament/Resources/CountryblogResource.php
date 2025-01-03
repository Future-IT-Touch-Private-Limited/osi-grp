<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CountryblogResource\Pages;
use App\Filament\Resources\CountryblogResource\RelationManagers;
use App\Models\Countryblog;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;


class CountryblogResource extends Resource
{
    protected static ?string $model = Countryblog::class;

    protected static ?string $navigationIcon = 'heroicon-o-square-2-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //

                Select::make("country")->options([
                    'india' => 'India',
                    'america' => 'America',

                ]),
                FileUpload::make('image'),
                TextInput::make('heading'),
                TextInput::make('content'),




            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
                ImageColumn::make('image'),
                TextColumn::make("country"),
                TextColumn::make("heading"),
                TextColumn::make("content"),

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
            'index' => Pages\ListCountryblogs::route('/'),
            'create' => Pages\CreateCountryblog::route('/create'),
            'edit' => Pages\EditCountryblog::route('/{record}/edit'),
        ];
    }
}
