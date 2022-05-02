import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import {
  AvatarModule,
  ButtonModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    IconModule,
    CommonModule,
    GridModule,
    ProgressModule,
    DashboardRoutingModule,
    ButtonModule,
    NgChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ChartjsModule,
    AvatarModule,
    TableModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
