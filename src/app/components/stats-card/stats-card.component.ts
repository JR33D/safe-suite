import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-stats-card',
    templateUrl: './stats-card.component.html',
    styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent {

    @Input() cardType: string = 'info';
    @Input() headerIcon: string = 'info_outline';
    @Input() category: string = 'Category';
    @Input() title: string = 'Title';
    @Input() footerIcon: string;
    @Input() footerText: string;
}
