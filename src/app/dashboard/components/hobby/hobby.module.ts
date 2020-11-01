import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HobbyRoutingModule } from './hobby-routing.module';
import { HobbyComponent } from './hobby.component';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HobbyComponent],
  imports: [
    CommonModule,
    HobbyRoutingModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    SharedModule,
  ]
})
export class HobbyModule { }
