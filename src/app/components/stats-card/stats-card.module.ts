import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsCardComponent } from './stats-card.component';



@NgModule({
    declarations: [StatsCardComponent],
    imports: [
        CommonModule
    ],
    exports: [StatsCardComponent]
})
export class StatsCardModule { }
