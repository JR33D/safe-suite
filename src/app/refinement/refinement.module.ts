import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimationModule } from './estimation/estimation.module';
import { RefinementRoutingModule } from './refinement-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EstimationModule,
    RefinementRoutingModule
  ]
})
export class RefinementModule { }
