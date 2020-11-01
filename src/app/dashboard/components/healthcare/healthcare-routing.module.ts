import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthcareComponent } from './healthcare.component';

const routes: Routes = [
  {
    path: '',
    component: HealthcareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthcareRoutingModule { }
