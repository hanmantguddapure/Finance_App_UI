import { Component, OnInit } from '@angular/core';

import { Loandetail } from 'src/shared/modals/loandetail';
import { PaymentDetail } from 'src/shared/modals/payment-detail';

import { LoanService, ToastService } from 'src/shared';
@Component({
    templateUrl: './close.component.html',
})
export class CloseComponent implements OnInit {
    loanDetail: Loandetail = new Loandetail(null);
    loanPaymetDetails: Array<PaymentDetail> = [];
    isLoader: boolean;
    constructor(private toster: ToastService, private loanservice: LoanService) {
        this.isLoader = false;
    }

    ngOnInit() {
    }
    getAccountDetail(event: any) {
        let loanId = event.target.value;
        if (loanId == "") {
            this.toster.message("Please enter loan id")
        } else {
            this.isLoader = true;
            this.loanservice.getLoanDetailByLoanId(loanId).then((data: any) => {
                this.loanDetail = data;
                this.loanDetail.pendingAmount = this.loanDetail.principalAmount - this.loanDetail.totalCollection - this.loanDetail.depositeAmt;
                this.loanPaymetDetails = this.loanDetail.loanCollections;
                this.loanDetail.totalInstallments = this.loanPaymetDetails.length;

                this.isLoader = false;
            }, error => {
                console.log(error);
                this.isLoader = false;
            });
        }

    }


    closeLoanAccount(loanDetail: any): void {
        if (this.loanDetail.custId == undefined) {
            this.toster.message("please Enter CustId")
        } else {
            this.loanDetail.loanStatus = loanDetail.loanStatus;
            this.loanDetail.remark = loanDetail.remark;
            this.isLoader = true;
            this.loanservice.closeLoanAccount(this.loanDetail).then((data: any) => {
                this.toster.message("Closed Successfully")

                this.isLoader = false;
            }, error => {
                console.log(error);
                this.isLoader = false;
            });
        }
    };

}
