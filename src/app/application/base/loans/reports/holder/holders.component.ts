import { Component, OnInit } from '@angular/core';

import { LoanRepo } from 'src/shared/modals/loan-repo';

import { CustomerService, LoanService, ToastService } from 'src/shared';

@Component({

    templateUrl: './holders.component.html',

})
export class HoldersComponent implements OnInit {
    allCustomerList: any;
    loanRepoDetails: Array<LoanRepo>;
    totalPrince: number;
    totalLoan: number;
    totalCollection: number;
    pendingCollection: number;
    totalAccounts: number;
    totalEarning: number;
    totalPenalty: number;
    totalInterest: number;
    totalProcessFess: number;
    totalDisbursed: number;
    isLoader: boolean;

    constructor(private toster: ToastService, private customerService: CustomerService, private loanService: LoanService) {
        this.isLoader = false;
    }

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.isLoader = true;
        this.customerService.getCustomerAllDetail().then((data: any) => {
            this.allCustomerList = data.response;
            this.isLoader = false;
        }, error => {
            console.log(error);
            this.isLoader = false;
        });
    }

    resetForm() {
        console.log('resetForm');

        this.totalPrince = 0;
        this.totalLoan = 0;
        this.pendingCollection = 0;
        this.totalCollection = 0;
        this.totalEarning = 0;
        this.totalPenalty = 0;
        this.totalInterest = 0;
        this.totalProcessFess = 0;
        this.totalDisbursed = 0;
        this.totalAccounts = 0;
        this.loanRepoDetails = null;
    }

    onStatusChange(event: any) {
        let custId = event.target.value;
        this.resetForm();
        this.isLoader = true;
        this.loanService.getLoanDetailByCustId(custId).then((data: any) => {
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

            this.isLoader = false;
        }, error => {
            console.log(error);
            this.isLoader = false;
        });
    }

}
