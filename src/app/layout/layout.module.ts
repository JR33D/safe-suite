import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { VelocityModule } from '../velocity/velocity.module';
import { RefinementModule } from '../refinement/refinement.module';
import { SidebarComponent } from '../components/sidebar/sidebar.component';


@NgModule({
  declarations: [LayoutComponent, SidebarComponent],
  imports: [
    CommonModule,
    DashboardModule,
    VelocityModule,
    RefinementModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
