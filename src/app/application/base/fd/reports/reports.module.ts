import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { StatusComponent } from './status/status.component';
import { HoldersComponent } from './holders/holders.component';
import { SharedAppModule } from 'src/shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        SharedAppModule,
        ReportsRoutingModule,
        NgbModule
    ],
    declarations: [
        ReportsComponent,
        StatusComponent,
        HoldersComponent
    ]
})
export class ReportsModule { }
