<?php

namespace App\Filament\Resources\CountryblogResource\Pages;

use App\Filament\Resources\CountryblogResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditCountryblog extends EditRecord
{
    protected static string $resource = CountryblogResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
