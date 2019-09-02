import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstimationComponent } from './estimation/estimation.component';


const routes: Routes = [
    {
        path: 'estimation',
        component: EstimationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RefinementRoutingModule { }
