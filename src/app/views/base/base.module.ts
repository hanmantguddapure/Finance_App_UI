// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { SharedAppModule } from 'src/shared/shared.module';

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

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedAppModule,

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
        LoanAccountComponent,
        LoanPaymentComponent,
        LoanEMIComponent,
        DisbursedLoansComponent,
        LoanDetailComponent,
        CloseLoanComponent,
        LoanRepoComponent,
        LoanPenltyComponent,
        LoanCollectionReportComponent,
        LoanHoldersComponent,
        LoanPenaltyRepoComponent,
        FirmLoanComponent,
        FirmLoanRepoComponent,
        FirmLoanCloseComponent,
        ShortTermLoanComponent,
        ShortTermLoanCloseComponent,
        ShortTermLoanRepoComponent,
    ]
})
export class BaseModule { }
