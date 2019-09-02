import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { FistOfFiveComponent } from './fist-of-five/fist-of-five.component';
import { CalculatorSummaryComponent } from './calculator/calculator-summary/calculator-summary.component';


const routes: Routes = [
    {
        path: 'calculator',
        component: CalculatorComponent
    },
    {
        path: 'calculator-summary',
        component: CalculatorSummaryComponent
    },
    {
        path: 'fist-of-five',
        component: FistOfFiveComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VelocityRoutingModule { }
