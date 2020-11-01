import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfessionRoutingModule } from './profession-routing.module';
import { ProfessionComponent } from './profession.component';

@NgModule({
  declarations: [ProfessionComponent],
  imports: [
    CommonModule,
    ProfessionRoutingModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    SharedModule,
  ]
})
export class ProfessionModule { }
