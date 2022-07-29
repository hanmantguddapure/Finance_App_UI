import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoanAccountComponent } from './loans/loan-account.component';
import { LoanPaymentComponent } from './loans/loan-payment.component';
import { LoanEMIComponent } from './loans/loan-emi.component';
import { LoanDetailComponent } from './loans/loan-detail.component';
import { LoanRepoComponent } from './loans/loan-repo.component';
import { LoanPenltyComponent } from './loans/loan-penlty.component';
import { LoanCollectionReportComponent } from './loans/loan-collection-report.component';
import { LoanHoldersComponent } from './loans/loan-holders.component';
import { LoanPenaltyRepoComponent } from './loans/loan-penalty-repo.component';

import { CloseLoanComponent } from './common/close-loan.component';
import { DisbursedLoansComponent } from './common/disbursed-loans.component';

import { FirmLoanComponent } from './firm-loan/firm-loan.component';
import { FirmLoanRepoComponent } from './firm-loan/firm-loan-repo.component';
import { FirmLoanCloseComponent } from './firm-loan/firm-loan-close.component';

import { ShortTermLoanComponent } from './short-term-loans/short-term-loan.component';
import { ShortTermLoanCloseComponent } from './short-term-loans/short-term-loan-close.component';
import { ShortTermLoanRepoComponent } from './short-term-loans/short-term-loan-repo.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'customer',
                data: {
                    title: 'Customer'
                },
                loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
            },
            {
                path: 'expense',
                data: {
                    title: 'Expense'
                },
                loadChildren: () => import('./expense/expense.module').then(m => m.ExpenseModule)
            },
            {
                path: 'fd',
                data: {
                    title: 'FD'
                },
                loadChildren: () => import('./fd/fd.module').then(m => m.FDModule)
            },
            {
                path: 'loan-account',
                component: LoanAccountComponent,
                data: {
                    title: 'Loan Account'
                }
            },
            {
                path: 'loan-payment',
                component: LoanPaymentComponent,
                data: {
                    title: 'Loan Payment'
                }
            },
            {
                path: 'loan-emi',
                component: LoanEMIComponent,
                data: {
                    title: 'Loan EMI'
                }
            },
            {
                path: 'loan-holders',
                component: LoanHoldersComponent,
                data: {
                    title: 'Loan Holders'
                }
            },
            {
                path: 'disbursed-loans',
                component: DisbursedLoansComponent,
                data: {
                    title: 'Disbursed Loans'
                }
            },
            {
                path: 'loan-detail',
                component: LoanDetailComponent,
                data: {
                    title: 'Loan Detail'
                }
            },
            {
                path: 'close-loan',
                component: CloseLoanComponent,
                data: {
                    title: 'Close Loan'
                }
            },
            {
                path: 'loan-repo',
                component: LoanRepoComponent,
                data: {
                    title: 'Loan Report'
                }
            },

            {
                path: 'loan-penlty',
                component: LoanPenltyComponent,
                data: {
                    title: 'Add Penlty'
                }
            },
            {
                path: 'loan-penlty-repo',
                component: LoanPenaltyRepoComponent,
                data: {
                    title: 'Add Penlty'
                }
            },
            {
                path: 'loan-collection-report',
                component: LoanCollectionReportComponent,
                data: {
                    title: 'Loan Collection Report'
                }
            },
            {
                path: 'firm-loan',
                component: FirmLoanComponent,
                data: {
                    title: 'Firm Loan'
                }
            },
            {
                path: 'firm-loan-close',
                component: FirmLoanCloseComponent,
                data: {
                    title: 'Firm Loan Close'
                }
            },
            {
                path: 'firm-loan-repo',
                component: FirmLoanRepoComponent,
                data: {
                    title: 'Firm Loan Repo'
                }
            },
            {
                path: 'short-term-loan',
                component: ShortTermLoanComponent,
                data: {
                    title: 'Firm Loan'
                }
            },
            {
                path: 'short-term-loan-close',
                component: ShortTermLoanCloseComponent,
                data: {
                    title: 'Firm Loan'
                }
            },
            {
                path: 'short-term-loan-Report',
                component: ShortTermLoanRepoComponent,
                data: {
                    title: 'Firm Loan'
                }
            },

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaseRoutingModule { }
