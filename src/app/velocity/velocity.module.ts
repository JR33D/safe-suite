import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorModule } from './calculator/calculator.module';
import { VelocityRoutingModule } from './velocity-routing.module';
import { FistOfFiveModule } from './fist-of-five/fist-of-five.module';
import { CalculatorSummaryComponent } from './calculator/calculator-summary/calculator-summary.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalculatorModule,
    FistOfFiveModule,
    VelocityRoutingModule
  ]
})
export class VelocityModule { }
