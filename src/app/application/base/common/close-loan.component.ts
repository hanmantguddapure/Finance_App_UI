import { Component, OnInit } from '@angular/core';

import { ToastService } from 'src/shared/services/toast.service';
import { Loandetail } from 'src/shared/modals/loandetail';
import { PaymentDetail } from 'src/shared/modals/payment-detail';
import { LoanserviceService } from 'src/shared/providers/loanservice.service';

@Component({
    templateUrl: './close-loan.component.html',
})
export class CloseLoanComponent implements OnInit {
    loanDetail: Loandetail = new Loandetail(null);
    loanPaymetDetails: Array<PaymentDetail> = [];
    constructor(private toster: ToastService, private loanservice: LoanserviceService) { }

    ngOnInit() {
    }
    getAccountDetail(event: any) {
        let loanId = event.target.value;
        if (loanId == "") {
            this.toster.error("Please enter loan id")
        } else {
            this.loanservice.getLoanDetailByLoanId(loanId).subscribe(data => {
                this.loanDetail = data;
                this.loanDetail.pendingAmount = this.loanDetail.principalAmount - this.loanDetail.totalCollection - this.loanDetail.depositeAmt;
                this.loanPaymetDetails = this.loanDetail.loanCollections;
                this.loanDetail.totalInstallments = this.loanPaymetDetails.length;
            })
        }

    }


    closeLoanAccount(loanDetail: any): void {
        if (this.loanDetail.custId == undefined) {
            this.toster.error("please Enter CustId")
        } else {
            this.loanDetail.loanStatus = loanDetail.loanStatus;
            this.loanDetail.remark = loanDetail.remark;
            this.loanservice.closeLoanAccount(this.loanDetail).subscribe(data => {
                this.toster.success("Closed Successfully")
            })
        }
    };

}
