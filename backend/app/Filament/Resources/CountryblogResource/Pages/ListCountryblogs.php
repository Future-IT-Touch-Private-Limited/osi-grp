<?php

namespace App\Filament\Resources\CountryblogResource\Pages;

use App\Filament\Resources\CountryblogResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListCountryblogs extends ListRecords
{
    protected static string $resource = CountryblogResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
