import { Component, OnInit } from '@angular/core';

import { LoanService, ToastService } from 'src/shared';

import { AppConstants } from 'src/shared/modals/app-constants';
import { LoanRepo } from 'src/shared/modals/loan-repo';

@Component({
    templateUrl: 'status.component.html',
})

export class StatusComponent implements OnInit {
    loanRepoDetails: Array<LoanRepo> = [];
    fileUrl: any;
    totalPrince: number = 0;
    totalLoan: number = 0;
    totalCollection: number = 0;
    pendingCollection: number = 0;
    totalAccounts: number = 0;
    totalEarning: number = 0;
    totalPenalty: number = 0;
    totalInterest: number = 0;
    totalProcessFess: number = 0;
    totalDisbursed: number = 0;
    isLoader: boolean;

    constructor(private toster: ToastService, private loanservice: LoanService) {
        this.isLoader = false;
    }

    ngOnInit() {
    }

    onStatusChange(event: any) {
        this.loanRepoDetails = null;

        let loanStatus = event.target.value;
        this.totalPrince = 0;
        this.totalLoan = 0;
        this.totalCollection = 0;
        this.pendingCollection = 0;
        this.totalAccounts = 0;
        this.totalEarning = 0;
        this.totalInterest = 0;
        this.totalPenalty = 0;
        this.totalProcessFess = 0;
        this.totalDisbursed = 0;
        this.fileUrl = AppConstants.API_ENDPOINT + "/Loan/download-loan-accounts/" + loanStatus;
        this.isLoader = true;
        this.loanservice.getLoanDetailByStatus(loanStatus).then((data: any) => {
            this.loanRepoDetails = data;
            this.loanRepoDetails.forEach(element => {
                this.totalPrince = this.totalPrince + (element.principalAmount);
                this.totalLoan = this.totalLoan + (element.loanAmt);
                this.pendingCollection = this.pendingCollection + (element.remainCollection);
                this.totalCollection = this.totalCollection + (element.totalCollection);
                this.totalEarning = this.totalEarning + (element.totalEarned);
                this.totalPenalty = this.totalPenalty + (element.totalPenalty);
                this.totalInterest = this.totalInterest + (element.totalInterest);
                this.totalProcessFess = this.totalProcessFess + (element.proceessingFee);
                this.totalDisbursed = this.totalDisbursed + (element.disburseAmt);
            });
            this.totalAccounts = this.loanRepoDetails.length;

            this.isLoader = false;
        }, error => {
            console.log(error);
            this.isLoader = false;
        });
    }
}
