import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from './../../../shared/shared.module';
import { CommitteeRoutingModule } from './committee-routing.module';
import { CommitteeComponent } from './committee.component';


@NgModule({
  declarations: [
    CommitteeComponent
  ],
  imports: [
    CommonModule,
    CommitteeRoutingModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    SharedModule,
  ]
})
export class CommitteeModule { }
