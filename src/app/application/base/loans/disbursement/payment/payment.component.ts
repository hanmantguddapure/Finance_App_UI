import { Component, OnInit } from '@angular/core';

import { Loandetail } from 'src/shared/modals/loandetail';

import { ToastService, LoanService } from 'src/shared';

@Component({
    templateUrl: './payment.component.html',
})

export class PaymentComponent implements OnInit {
    loanDetail: Loandetail = new Loandetail(null);
    disburseAmt: number | any;
    isLoader: boolean;
    constructor(private toster: ToastService, private loanservice: LoanService) {
        this.isLoader = false;
    }

    ngOnInit() {
    }
    getAccountDetail(event: any) {
        let loanId = event.target.value;
        if (loanId == "") {
            this.toster.error("Please enter loan id")
        } else {
            this.isLoader = true;
            this.loanservice.getLoanDetailByLoanId(loanId).then((data: any) => {
                this.loanDetail = data;
                if (this.loanDetail.disburseAmt != null) {
                    this.loanDetail.disburseAmt = this.loanDetail.loanAmt - this.loanDetail.disburseAmt;

                } else {

                    this.loanDetail.disburseAmt = this.loanDetail.loanAmt;
                }
                this.isLoader = false;
            }, errot => {
                this.isLoader = false;
            });
        }

    }

    makeLoanPayment(paymentDetail: any) {
        this.loanDetail.paymentMode = paymentDetail.paymentMode;
        this.loanDetail.disburseAmt = paymentDetail.disburseAmt;
        this.isLoader = true;
        this.loanservice.makeLoanPayment(this.loanDetail).then((data: any) => {
            this.loanDetail = data;
            this.toster.success("Payment Done Successfully");
            this.isLoader = false;
        }, errot => {
            this.isLoader = false;
        });
    }


}
