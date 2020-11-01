import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionComponent } from './profession.component';

const routes: Routes = [
  {
    path: '',
    component: ProfessionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionRoutingModule { }
