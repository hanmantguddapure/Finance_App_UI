import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedAppModule } from 'src/shared/shared.module';

import { LoanRoutingModule } from './loan-routing.module';

import { LoanPenltyComponent } from './penalty/penlty.component';
import { EMIComponent } from './installments/emi.component';

import { PersonalLoanComponent } from './personal-loan/personal-loan.component';

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
        LoanPenltyComponent,
        PersonalLoanComponent
    ]
})
export class LoanModule { }
