import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ChartsModule } from 'ng2-charts';
import { AdminItemComponent } from './components/admin-item/admin-item.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ConfirmModalComponent } from './components/confim-modal/confim-modal.component';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { AdminItemService } from './services/admin-item/admin-item.service';
import { AlertModalService } from './services/alert-modal/alert-modal.service';
import { ConfirmModalService } from './services/confirm-modal/confirm-modal.service';

@NgModule({
  declarations: [
    PieChartComponent,
    AdminTableComponent,
    BarChartComponent,
    AdminItemComponent,
    AlertModalComponent,
    ConfirmModalComponent,
    PersonTableComponent,
  ],
  imports: [
    CommonModule,
    ChartsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PieChartComponent,
    BarChartComponent,
    AdminTableComponent,
    AdminItemComponent,
    AlertModalComponent,
    ConfirmModalComponent,
    PersonTableComponent,
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
    AdminItemService,
    AlertModalService,
    ConfirmModalService,
  ]
})
export class SharedModule { }
