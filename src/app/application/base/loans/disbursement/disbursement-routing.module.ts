import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisbursementComponent } from './disbursement.component';
import { LoansComponent } from './loan/loans.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
    {
        path: '',
        component: DisbursementComponent,
        children: [
            {
                path: '',
                redirectTo: 'loan',
            },
            {
                path: 'loan',
                component: PaymentComponent,
                data: {
                    title: 'Loan'
                }
            },
            {
                path: 'payment',
                component: LoansComponent,
                data: {
                    title: 'Payment'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DisbursementRoutingModule { }
