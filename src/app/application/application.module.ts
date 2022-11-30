import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApplicationRoutingModule } from './application-routing.module';

import { ApplicationComponent } from './application.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './core/header/header.component';


import { SharedAppModule } from 'src/shared/shared.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedAppModule,
        NgbModule,

        ApplicationRoutingModule
    ],
    declarations: [
        ApplicationComponent,
        DashboardComponent,
        HeaderComponent
    ],
    providers: [
    ]
})
export class ApplicationModule { }
