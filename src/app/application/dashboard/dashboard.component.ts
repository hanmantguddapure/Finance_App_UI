import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
    LoanService,
    DashBoardService,
    ApiService,
} from 'src/shared';

import { AppSummary } from 'src/shared/modals/app-summary';
import { FdSummary } from 'src/shared/modals/fd-summary';
import { LoanSummary } from 'src/shared/modals/loan-summary';




@Component({
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    radioModel: string = 'Month';
    appSummary: AppSummary;
    loanSummary: LoanSummary;
    fdSummary: FdSummary;
    totalcredit: number;
    totalDebitBalSummary: number;
    totalCreditBalSummary: number;
    totaolDebit: number;
    totalClosingBal: number;
    pendingCollection: number;
    closingBalSummary: number;
    constructor(private loanservice: LoanService,
        private dashboardService: DashBoardService,
        private apiService: ApiService,
        private router: Router) {

        this.totalcredit = 0;
        this.totalDebitBalSummary = 0;
        this.totalCreditBalSummary = 0;
        this.totaolDebit = 0;
        this.totalClosingBal = 0;
        this.pendingCollection = 0;
        this.closingBalSummary = 0;

        this.appSummary = new AppSummary(null);
        this.loanSummary = new LoanSummary(null);
        this.fdSummary = new FdSummary(null);
    }


    ngOnInit(): void {
        this.dashboardService.getAllSummaryRepo('Opened', 'Active').then((data: any) => {
            this.totalcredit = 0;
            this.appSummary = data;
            this.loanSummary = this.appSummary?.loanSummary;
            this.fdSummary = this.appSummary?.fdSummary;
            this.totalcredit = this.loanSummary?.collections + this.loanSummary?.penalty + this.fdSummary?.fdAmount + this.appSummary?.firmLoan;
            this.totaolDebit = this.loanSummary?.disbursements + this.fdSummary?.paidInterest + this.appSummary?.expenses + this.appSummary?.shortTermLoan;
            this.totalClosingBal = this.totalcredit - this.totaolDebit;

            this.totalDebitBalSummary = this.fdSummary?.fdAmount + this.appSummary?.firmLoan + this.fdSummary?.pendingIntrest;
            this.totalCreditBalSummary = Math.floor(this.loanSummary?.disbursements + this.loanSummary?.loanIntrest + this.loanSummary?.processingFees);
            this.pendingCollection = this.totalCreditBalSummary - this.loanSummary?.collections;
            this.closingBalSummary = this.pendingCollection - this.totalDebitBalSummary;
            // this.isLoader = false;
        }, errot => {
            // this.isLoader = false;
        });
    }
}
