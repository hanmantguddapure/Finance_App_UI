import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReportsRoutingModule } from './reports-routing.module';
import { LoaderComponent } from 'src/shared';
import { ReportsComponent } from './reports.component';
import { StatusComponent } from './status/status.component';
import { HoldersComponent } from './holders/holders.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        ReportsRoutingModule,
        NgbModule
    ],
    declarations: [
        ReportsComponent,
        StatusComponent,
        HoldersComponent,


        LoaderComponent
    ]
})
export class ReportsModule { }
