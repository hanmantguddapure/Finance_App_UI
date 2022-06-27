import { Component, OnInit } from '@angular/core';
import { LoanserviceService } from 'src/app/services/loanservice.service';
import { PaymentDetail } from 'src/shared/modals/payment-detail';
import { Loandetail } from 'src/shared/modals/loandetail';
import { AppConstants } from 'src/shared/modals/app-constants';
import { ToastService } from 'src/shared/services/toast.service';

@Component({

    templateUrl: './loan-detail.component.html',

})
export class LoanDetailComponent implements OnInit {
    loanDetail: Loandetail = new Loandetail(null);
    installmentMissedRequiredColl: any;
    loanPaymetDetails: Array<PaymentDetail> = [];
    constructor(private toster: ToastService, private loanservice: LoanserviceService) { }
    fileUrl: any;
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
                this.installmentMissedRequiredColl = this.loanDetail.pendingAmount + this.loanDetail.depositeAmt;
                this.loanDetail.totalInstallments = this.loanPaymetDetails.length;
                this.fileUrl = AppConstants.API_ENDPOINT + "/Loan/download-loan-dtl/" + loanId;
            })
        }

    }

}
