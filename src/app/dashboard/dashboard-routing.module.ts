import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardContentComponent,
      },
      {
        path: 'committee',
        loadChildren: () => import('./components/committee/committee.module').then(m => m.CommitteeModule)
      },
      {
        path: 'healthcare',
        loadChildren: () => import('./components/healthcare/healthcare.module').then(m => m.HealthcareModule)
      },
      {
        path: 'hobby',
        loadChildren: () => import('./components/hobby/hobby.module').then(m => m.HobbyModule)
      },
      {
        path: 'profession',
        loadChildren: () => import('./components/profession/profession.module').then(m => m.ProfessionModule)
      },
      {
        path: 'people',
        loadChildren: () => import('./components/person/person.module').then(m => m.PersonModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
