import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
        BsDropdownModule,
        ButtonsModule.forRoot(),
        AvatarModule,
        TableModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
