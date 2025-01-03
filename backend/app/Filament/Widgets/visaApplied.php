<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;

class visaApplied extends ChartWidget
{
    protected static ?string $heading = 'User Line Chart';
    protected static ?int $navigationSort = 0;
    protected function getData(): array
    {
        return [
            'labels' => ['January', 'February', 'March', 'April', 'May', 'June'],
            'datasets' => [
                [
                    'label' => 'User Registrations',
                    'borderColor' => 'rgba(75, 192, 192, 1)',
                    'backgroundColor' => 'rgba(75, 192, 192, 0.2)',
                    'data' => [10, 15, 8, 20, 25, 18],
                    'fill' => true, // Enables the fill under the line
                ],
            ],
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
