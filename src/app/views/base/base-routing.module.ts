import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { CustomerInfoComponent } from './customer/customer-info.component';

import { FDAccountComponent } from './fd/fdaccount.component';
import { FDAccountViewComponent } from './fd/fdaccount-view.component';
import { FDAccountCloseComponent } from './fd/fdaccount-close.component';
import { FDAccountReportComponent } from './fd/fdaccount-report.component';
import { FDPayInterestAmtComponent } from './fd/fdpay-interest-amt.component';
import { FDOfCustomersComponent } from './fd/fdof-customers.component';

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

import { ExpenseTypesComponent } from './expense/expense-types.component';
import { ExpenseDetailComponent } from './expense/expense-detail.component';
import { ExpenseReportComponent } from './expense/expense-report.component';

import { FirmLoanComponent } from './firm-loan/firm-loan.component';
import { FirmLoanRepoComponent } from './firm-loan/firm-loan-repo.component';
import { FirmLoanCloseComponent } from './firm-loan/firm-loan-close.component';

import { ShortTermLoanComponent } from './short-term-loans/short-term-loan.component';
import { ShortTermLoanCloseComponent } from './short-term-loans/short-term-loan-close.component';
import { ShortTermLoanRepoComponent } from './short-term-loans/short-term-loan-repo.component';


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Base'
        },
        children: [

            {
                path: 'fdaccount',
                component: FDAccountComponent,
                data: {
                    title: 'fdaccount'
                }
            },
            {
                path: 'fdaccountview',
                component: FDAccountViewComponent,
                data: {
                    title: 'fdaccountview'
                }
            },
            {
                path: 'fdaccountclose',
                component: FDAccountCloseComponent,
                data: {
                    title: 'fdaccountview'
                }
            },
            {
                path: 'fdpayinterest',
                component: FDPayInterestAmtComponent,
                data: {
                    title: 'fdpayinterest'
                }
            },
            {
                path: 'fdaccountreport',
                component: FDAccountReportComponent,
                data: {
                    title: 'fdaccountview'
                }
            },
            {
                path: 'fdcustreport',
                component: FDOfCustomersComponent,
                data: {
                    title: 'fdcustreport'
                }
            },
            {
                path: 'customer',
                component: CustomerComponent,
                data: {
                    title: 'Customer'
                }
            },
            {
                path: 'customer-info',
                component: CustomerInfoComponent,
                data: {
                    title: 'Customer Information'
                }
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
                path: 'expense-types',
                component: ExpenseTypesComponent,
                data: {
                    title: 'Expense Types'
                }
            },

            {
                path: 'expense-detail',
                component: ExpenseDetailComponent,
                data: {
                    title: 'Expenses'
                }
            },
            {
                path: 'expense-report',
                component: ExpenseReportComponent,
                data: {
                    title: 'Expenses'
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
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaseRoutingModule { }
