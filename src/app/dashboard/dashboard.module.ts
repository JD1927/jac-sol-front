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
import { SharedModule } from './../shared/shared.module';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartService } from './services/charts/chart.service';
import { SidenavService } from './services/sidenav/sidenav.service';
import { SidenavComponent } from './../dashboard/components/sidenav/sidenav.component';
import { ToolbarComponent } from './../dashboard/components/toolbar/toolbar.component';

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
    SharedModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [
    SidenavService,
    ChartService,
  ]
})
export class DashboardModule { }
