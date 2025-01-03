<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CountryResource\Pages;
use App\Filament\Resources\CountryResource\RelationManagers;
use App\Models\Country;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;

use Illuminate\Support\Str;
use Filament\Forms\Components\Tabs;

use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Columns;
class CountryResource extends Resource


{
    protected static ?string $model = Country::class;

    protected static ?string $navigationIcon = 'heroicon-o-globe-asia-australia';

    public static function form(Form $form): Form
    {
        return $form
        ->schema([
            Tabs::make('Country Information')
                ->tabs([
                    Tabs\Tab::make('General Information')
                        ->schema([
                            TextInput::make('Countryname')
                            ->required()
                            ->afterStateUpdated(fn ($state, callable $set) => $set('slug', Str::slug($state))),
                        
                        TextInput::make('slug')
                            ->hidden()
                            ->default(fn (callable $get) => Str::slug($get('Countryname'))),
                            TextInput::make('Countrycode')->required(),
                            FileUpload::make('flag')->label('Flag')->directory('flags')->required(),
                            FileUpload::make('Cardimage')->label('Card Image')->directory('cardimages')->required(),
                            TextInput::make('numbercode')->label('Number Code')->required(),
                            TextInput::make('phone_number')->label('Phone Number')->required(),
                        ])->columns(2),

                    Tabs\Tab::make('Visa Information')
                        ->schema([
                            TextInput::make('GetVisaInDays')->label('Visa Processing Time (Days)')->required(),
                            TextInput::make('price')->label('Price')->required(),
                            TagsInput::make('countrystatus')->label('Country Status'),
                        ]),

                    Tabs\Tab::make('Additional Details')
                        ->schema([
                            Repeater::make('FAQ')
                                ->schema([
                                    TextInput::make('question')->label('Question')->required(),
                                    TextInput::make('answer')->label('Answer')->required(),
                                ])
                                ->columns(2)
                                ->createItemButtonLabel('Add FAQ')
                                ->required()
                                ->defaultItems(1),

                            Repeater::make('mandatory_docs')
                                ->schema([
                                    TextInput::make('heading')->label('Heading')->required(),
                                    RichEditor::make('text')
                                        ->toolbarButtons([
                                            'attachFiles', 'blockquote', 'bold', 'bulletList', 'codeBlock',
                                            'h2', 'h3', 'italic', 'link', 'orderedList', 'redo', 
                                            'strike', 'underline', 'undo',
                                        ]),
                                ])
                                ->columns(2)
                                ->createItemButtonLabel('Add Document')
                                ->required()
                                ->defaultItems(1),
                        ]),

                    Tabs\Tab::make('Eligibility Criteria')
                        ->schema([
                            Repeater::make('Age_lessthen_18')
                                ->schema([
                                    TextInput::make('heading')->label('Heading')->required(),
                                    RichEditor::make('text')
                                        ->toolbarButtons([
                                            'attachFiles', 'blockquote', 'bold', 'bulletList', 'codeBlock',
                                            'h2', 'h3', 'italic', 'link', 'orderedList', 'redo', 
                                            'strike', 'underline', 'undo',
                                        ]),
                                ])
                                ->columns(2)
                                ->createItemButtonLabel('Add Age Criteria')
                                ->required()
                                ->defaultItems(1),

                            Repeater::make('Employed')
                                ->schema([
                                    TextInput::make('heading')->label('Heading')->required(),
                                    RichEditor::make('text')
                                        ->toolbarButtons([
                                            'attachFiles', 'blockquote', 'bold', 'bulletList', 'codeBlock',
                                            'h2', 'h3', 'italic', 'link', 'orderedList', 'redo', 
                                            'strike', 'underline', 'undo',
                                        ]),
                                ])
                                ->columns(2)
                                ->createItemButtonLabel('Add Employment Criteria')
                                ->required()
                                ->defaultItems(1),

                            Repeater::make('isFunded')
                                ->schema([
                                    TextInput::make('heading')->label('Heading')->required(),
                                    RichEditor::make('text')
                                        ->toolbarButtons([
                                            'attachFiles', 'blockquote', 'bold', 'bulletList', 'codeBlock',
                                            'h2', 'h3', 'italic', 'link', 'orderedList', 'redo', 
                                            'strike', 'underline', 'undo',
                                        ]),
                                ])
                                ->columns(2)
                                ->createItemButtonLabel('Add Funding Criteria')
                                ->required()
                                ->defaultItems(1),

                            Repeater::make('Self_employed')
                                ->schema([
                                    TextInput::make('heading')->label('Heading')->required(),
                                    RichEditor::make('text')
                                        ->toolbarButtons([
                                            'attachFiles', 'blockquote', 'bold', 'bulletList', 'codeBlock',
                                            'h2', 'h3', 'italic', 'link', 'orderedList', 'redo', 
                                            'strike', 'underline', 'undo',
                                        ]),
                                ])
                                ->columns(2)
                                ->createItemButtonLabel('Add Self-employment Criteria')
                                ->required()
                                ->defaultItems(1),

                            Repeater::make('Student')
                                ->schema([
                                    TextInput::make('heading')->label('Heading')->required(),
                                    RichEditor::make('text')
                                        ->toolbarButtons([
                                            'attachFiles', 'blockquote', 'bold', 'bulletList', 'codeBlock',
                                            'h2', 'h3', 'italic', 'link', 'orderedList', 'redo', 
                                            'strike', 'underline', 'undo',
                                        ]),
                                ])
                                ->columns(2)
                                ->createItemButtonLabel('Add Student Criteria')
                                ->required()
                                ->defaultItems(1),
                        ]),

                    Tabs\Tab::make('Documents')
                        ->schema([
                            FileUpload::make('pdf')
                                ->label('Upload PDF')
                                ->directory('pdfs') 
                                ->acceptedFileTypes(['application/pdf']) 
                                ->maxSize(2048)
                                ->nullable(),
                        ]),
                ])->columnSpanFull(),
        ]);

    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
                ImageColumn::make('flag'),

                TextColumn::make('Countryname'),
                TextColumn::make('Countrycode'),
                TextColumn::make('numbercode'),
                TextColumn::make('GetVisaInDays'),
                TextColumn::make('price'),


                ImageColumn::make('Cardimage')
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
            'index' => Pages\ListCountries::route('/'),
            'create' => Pages\CreateCountry::route('/create'),
            'edit' => Pages\EditCountry::route('/{record}/edit'),
        ];
    }
}
