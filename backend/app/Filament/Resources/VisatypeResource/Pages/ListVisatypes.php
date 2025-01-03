<?php

namespace App\Filament\Resources\VisatypeResource\Pages;

use App\Filament\Resources\VisatypeResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListVisatypes extends ListRecords
{
    protected static string $resource = VisatypeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
