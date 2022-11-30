import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedAppModule } from 'src/shared/shared.module';

import { LoanRoutingModule } from './loan-routing.module';

import { LoanPenltyComponent } from './penalty/penlty.component';
import { EMIComponent } from './installments/emi.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedAppModule,

        LoanRoutingModule,
        NgbModule
    ],
    declarations: [
        EMIComponent,
        LoanPenltyComponent
    ]
})
export class LoanModule { }
