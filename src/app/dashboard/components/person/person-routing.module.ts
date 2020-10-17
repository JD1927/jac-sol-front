import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonContentComponent } from './person-content/person-content.component';
import { PersonViewComponent } from './person-view/person-view.component';
import { PersonComponent } from './person.component';

const routes: Routes = [
  {
    path: '',
    component: PersonComponent,
    children: [
      {
        path: '',
        component: PersonContentComponent
      },
      {
        path: 'detail',
        component: PersonViewComponent
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
