import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AdminEffects } from '../store/effects/admin/admin.effects';
import { adminReducer } from '../store/reducers/admin/admin.reducer';
import { SidenavComponent } from './../dashboard/components/sidenav/sidenav.component';
import { ToolbarComponent } from './../dashboard/components/toolbar/toolbar.component';
import { SharedModule } from './../shared/shared.module';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartService } from './services/charts/chart.service';
import { CommitteeService } from './services/committee/committee.service';
import { HealthcareService } from './services/healthcare/healthcare.service';
import { HobbyService } from './services/hobby/hobby.service';
import { ParameterService } from './services/parameter/parameter.service';
import { ProfessionService } from './services/profession/profession.service';
import { ReportService } from './services/report/report.service';
import { SidenavService } from './services/sidenav/sidenav.service';
import { ContactNumberService } from './services/contact-number/contact-number.service';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
    SidenavComponent,
    DashboardContentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    LayoutModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('adminState', adminReducer),
    EffectsModule.forFeature([AdminEffects]),
    SharedModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [
    SidenavService,
    ChartService,
    CommitteeService,
    HealthcareService,
    HobbyService,
    ProfessionService,
    ReportService,
    ParameterService,
    ContactNumberService,
  ]
})
export class DashboardModule { }
