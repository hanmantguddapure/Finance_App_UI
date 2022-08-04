import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApplicationRoutingModule } from './application-routing.module';

import { ApplicationComponent } from './application.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './core/header/header.component';
import { LoaderComponent } from './core/loader.component';

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
import { SharedAppModule } from 'src/shared/shared.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedAppModule,
        NgbModule,

        ApplicationRoutingModule
    ],
    declarations: [
        ApplicationComponent,
        DashboardComponent,
        HeaderComponent,
        LoaderComponent,

        CloseLoanComponent,
        DisbursedLoansComponent,
        FirmLoanCloseComponent,
        FirmLoanRepoComponent,
        FirmLoanComponent,
        LoanAccountComponent,
        LoanCollectionReportComponent,
        LoanDetailComponent,
        LoanEMIComponent,
        LoanHoldersComponent,
        LoanPaymentComponent,
        LoanPenaltyRepoComponent,
        LoanPenltyComponent,
        LoanRepoComponent,
        ShortTermLoanCloseComponent,
        ShortTermLoanRepoComponent,
        ShortTermLoanComponent
    ],
    providers: [
    ]
})
export class ApplicationModule { }
