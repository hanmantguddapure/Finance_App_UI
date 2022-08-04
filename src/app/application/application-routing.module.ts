import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationComponent } from './application.component';

import { CloseLoanComponent } from './base/common/close-loan.component';
import { DisbursedLoansComponent } from './base/common/disbursed-loans.component';
import { FirmLoanCloseComponent } from './base/firm-loan/firm-loan-close.component';
import { FirmLoanRepoComponent } from './base/firm-loan/firm-loan-repo.component';
import { FirmLoanComponent } from './base/firm-loan/firm-loan.component';
import { LoanAccountComponent } from './base/loans/loan-account.component';
import { LoanCollectionReportComponent } from './base/loans/loan-collection-report.component';
import { LoanDetailComponent } from './base/loans/loan-detail.component';
import { LoanEMIComponent } from './base/loans/loan-emi.component';
import { LoanHoldersComponent } from './base/loans/loan-holders.component';
import { LoanPaymentComponent } from './base/loans/loan-payment.component';
import { LoanPenaltyRepoComponent } from './base/loans/loan-penalty-repo.component';
import { LoanPenltyComponent } from './base/loans/loan-penlty.component';
import { LoanRepoComponent } from './base/loans/loan-repo.component';
import { ShortTermLoanCloseComponent } from './base/short-term-loans/short-term-loan-close.component';
import { ShortTermLoanRepoComponent } from './base/short-term-loans/short-term-loan-repo.component';
import { ShortTermLoanComponent } from './base/short-term-loans/short-term-loan.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const applicationRoutes: Routes = [
    {
        path: '',
        component: ApplicationComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'customer',
                loadChildren: () => import('./base/customer/customer.module').then(m => m.CustomerModule),
                data: { preload: true }
            },
            {
                path: 'expense',
                data: {
                    title: 'Expense',
                    preload: true
                },
                loadChildren: () => import('./base/expense/expense.module').then(m => m.ExpenseModule)
            },
            {
                path: 'fd',
                data: {
                    title: 'FD',
                    preload: true
                },
                loadChildren: () => import('./base/fd/fd.module').then(m => m.FDModule)
            },
            {
                path: 'loan-account',
                component: LoanAccountComponent,
                data: {
                    title: 'Loan Account',
                    preload: true
                }
            },
            {
                path: 'loan-payment',
                component: LoanPaymentComponent,
                data: {
                    title: 'Loan Payment',
                    preload: true
                }
            },
            {
                path: 'loan-emi',
                component: LoanEMIComponent,
                data: {
                    title: 'Loan EMI',
                    preload: true
                }
            },
            {
                path: 'loan-holders',
                component: LoanHoldersComponent,
                data: {
                    title: 'Loan Holders',
                    preload: true
                }
            },
            {
                path: 'disbursed-loans',
                component: DisbursedLoansComponent,
                data: {
                    title: 'Disbursed Loans',
                    preload: true
                }
            },
            {
                path: 'loan-detail',
                component: LoanDetailComponent,
                data: {
                    title: 'Loan Detail',
                    preload: true
                }
            },
            {
                path: 'close-loan',
                component: CloseLoanComponent,
                data: {
                    title: 'Close Loan',
                    preload: true
                }
            },
            {
                path: 'loan-repo',
                component: LoanRepoComponent,
                data: {
                    title: 'Loan Report',
                    preload: true
                }
            },

            {
                path: 'loan-penlty',
                component: LoanPenltyComponent,
                data: {
                    title: 'Add Penlty',
                    preload: true
                }
            },
            {
                path: 'loan-penlty-repo',
                component: LoanPenaltyRepoComponent,
                data: {
                    title: 'Add Penlty',
                    preload: true
                }
            },
            {
                path: 'loan-collection-report',
                component: LoanCollectionReportComponent,
                data: {
                    title: 'Loan Collection Report',
                    preload: true
                }
            },
            {
                path: 'firm-loan',
                component: FirmLoanComponent,
                data: {
                    title: 'Firm Loan',
                    preload: true
                }
            },
            {
                path: 'firm-loan-close',
                component: FirmLoanCloseComponent,
                data: {
                    title: 'Firm Loan Close',
                    preload: true
                }
            },
            {
                path: 'firm-loan-repo',
                component: FirmLoanRepoComponent,
                data: {
                    title: 'Firm Loan Repo',
                    preload: true
                }
            },
            {
                path: 'short-term-loan',
                component: ShortTermLoanComponent,
                data: {
                    title: 'Firm Loan',
                    preload: true
                }
            },
            {
                path: 'short-term-loan-close',
                component: ShortTermLoanCloseComponent,
                data: {
                    title: 'Firm Loan',
                    preload: true
                }
            },
            {
                path: 'short-term-loan-Report',
                component: ShortTermLoanRepoComponent,
                data: {
                    title: 'Firm Loan',
                    preload: true
                }
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(applicationRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ApplicationRoutingModule { }
