import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/shared/services/toast.service';
import { Loandetail } from 'src/shared/modals/loandetail';
import { LoanserviceService } from 'src/app/services/loanservice.service';

@Component({

    templateUrl: './loan-payment.component.html',

})
export class LoanPaymentComponent implements OnInit {
    loanDetail: Loandetail = new Loandetail(null);
    disburseAmt: number | any;
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
                if (this.loanDetail.disburseAmt != null) {
                    this.loanDetail.disburseAmt = this.loanDetail.loanAmt - this.loanDetail.disburseAmt;

                } else {

                    this.loanDetail.disburseAmt = this.loanDetail.loanAmt;
                }
            })
        }

    }

    makeLoanPayment(paymentDetail: any) {
        this.loanDetail.paymentMode = paymentDetail.paymentMode;
        this.loanDetail.disburseAmt = paymentDetail.disburseAmt;
        this.loanservice.makeLoanPayment(this.loanDetail).subscribe(data => {
            this.loanDetail = data;
            this.toster.success("Payment Done Successfully");
        })
    }


}
