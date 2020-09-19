import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitteeRoutingModule } from './committee-routing.module';
import { CommitteeComponent } from './committee.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    CommitteeComponent
  ],
  imports: [
    CommonModule,
    CommitteeRoutingModule,
    MatTableModule
  ]
})
export class CommitteeModule { }
