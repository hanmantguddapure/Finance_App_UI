import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedAppModule } from 'src/shared/shared.module';

import { DisbursementRoutingModule } from './disbursement-routing.module';

import { DisbursementComponent } from './disbursement.component';
import { LoansComponent } from './loan/loans.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedAppModule,

        DisbursementRoutingModule,
        NgbModule
    ],
    declarations: [
        DisbursementComponent,
        LoansComponent,
        PaymentComponent
    ]
})
export class DisbursementModule { }
