// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';

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

@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        BaseRoutingModule,
        BsDropdownModule.forRoot(),
        TabsModule,
        CarouselModule,
        CollapseModule,
        PaginationModule,
        PopoverModule,
        ProgressbarModule,
        TooltipModule
    ],
    declarations: [
        CustomerComponent,
        FDAccountComponent,
        FDAccountViewComponent,
        FDAccountCloseComponent,
        FDAccountReportComponent,
        CustomerInfoComponent,
        LoanAccountComponent,
        LoanPaymentComponent,
        LoanEMIComponent,
        DisbursedLoansComponent,
        LoanDetailComponent,
        CloseLoanComponent,
        LoanRepoComponent,
        LoanPenltyComponent,
        LoanCollectionReportComponent,
        ExpenseTypesComponent,
        ExpenseDetailComponent,
        ExpenseReportComponent,
        FDAccountViewComponent,
        FDAccountCloseComponent,
        FDAccountReportComponent,
        FDPayInterestAmtComponent,
        FDOfCustomersComponent,
        LoanHoldersComponent,
        LoanPenaltyRepoComponent,
        FirmLoanComponent,
        FirmLoanRepoComponent,
        FirmLoanCloseComponent,
        ShortTermLoanComponent,
        ShortTermLoanCloseComponent,
        ShortTermLoanRepoComponent
    ]
})
export class BaseModule { }
