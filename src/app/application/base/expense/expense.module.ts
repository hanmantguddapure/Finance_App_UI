import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ExpenseRoutingModule } from './expense-routing.module';

import { ExpenseComponent } from './expense.component';
import { ExpenseDetailComponent } from './details/detail.component';
import { ExpenseReportComponent } from './report/report.component';
import { ExpenseTypesComponent } from './types/types.component';
import { SharedAppModule } from 'src/shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        SharedAppModule,
        ExpenseRoutingModule,
        NgbModule
    ],
    declarations: [
        ExpenseComponent,
        ExpenseDetailComponent,
        ExpenseReportComponent,
        ExpenseTypesComponent
    ]
})
export class ExpenseModule { }
