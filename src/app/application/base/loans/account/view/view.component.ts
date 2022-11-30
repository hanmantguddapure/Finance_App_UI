import { Component, OnInit } from '@angular/core';

import { PaymentDetail } from 'src/shared/modals/payment-detail';
import { Loandetail } from 'src/shared/modals/loandetail';
import { AppConstants } from 'src/shared/modals/app-constants';

import { LoanService, ToastService } from 'src/shared';

@Component({

    templateUrl: './view.component.html',

})
export class ViewComponent implements OnInit {
    loanDetail: Loandetail = new Loandetail(null);
    installmentMissedRequiredColl: any;
    loanPaymetDetails: Array<PaymentDetail> = [];
    isLoader: boolean;

    constructor(private toster: ToastService, private loanservice: LoanService) {
        this.isLoader = false;
    }

    fileUrl: any;

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
                this.loanDetail.pendingAmount = this.loanDetail?.principalAmount - this.loanDetail?.totalCollection - this.loanDetail?.depositeAmt;
                this.loanPaymetDetails = this.loanDetail?.loanCollections;
                this.installmentMissedRequiredColl = this.loanDetail?.pendingAmount + this.loanDetail?.depositeAmt;
                this.loanDetail.totalInstallments = this.loanPaymetDetails?.length;
                this.fileUrl = AppConstants.API_ENDPOINT + "/Loan/download-loan-dtl/" + loanId;

                this.isLoader = false;
            }, error => {
                console.log(error);
                this.isLoader = false;
            });
        }
    }
}
