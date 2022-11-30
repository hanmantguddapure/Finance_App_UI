import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedAppModule } from 'src/shared/shared.module';

import { ReportsRoutingModule } from './reports-routing.module';

import { ReportsComponent } from './reports.component';
import { CollectionComponent } from './collection/collection.component';
import { HoldersComponent } from './holder/holders.component';
import { PenaltyComponent } from './penalty/penalty.component';
import { StatusComponent } from './status/status.component';

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
        CollectionComponent,
        HoldersComponent,
        PenaltyComponent,
        StatusComponent
    ]
})
export class ReportsModule { }
