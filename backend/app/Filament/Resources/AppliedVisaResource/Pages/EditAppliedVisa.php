<?php

namespace App\Filament\Resources\AppliedVisaResource\Pages;

use App\Filament\Resources\AppliedVisaResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditAppliedVisa extends EditRecord
{
    protected static string $resource = AppliedVisaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
