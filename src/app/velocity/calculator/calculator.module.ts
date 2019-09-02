import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { CalculatorSummaryComponent } from './calculator-summary/calculator-summary.component';
import { StatsCardModule } from 'src/app/components/stats-card/stats-card.module';



@NgModule({
  declarations: [CalculatorComponent, CalculatorSummaryComponent],
  imports: [
    CommonModule,
    StatsCardModule,
  ]
})
export class CalculatorModule { }
