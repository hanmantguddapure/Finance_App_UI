import { Component, OnInit } from '@angular/core';

import { ShortTermLoan } from 'src/shared/modals/short-term-loan';

import { CustomerService, LoanService, ToastService } from 'src/shared';

@Component({
    templateUrl: './close.component.html',
})
export class CloseComponent implements OnInit {

    shortTermLoanObj: ShortTermLoan = new ShortTermLoan(null);
    isLoader: boolean;
    constructor(private toster: ToastService, private loanService: LoanService) {
        this.isLoader = false;
    }

    ngOnInit() {
    }

    getAccountDetail(event: any) {
        let shortTermLoanId = event.target.value
        if (shortTermLoanId == "") {
            this.toster.message("Please enter Account id")
        } else {
            this.isLoader = true;
            this.loanService.getShortTermLoanById(shortTermLoanId).then((data: any) => {
                this.shortTermLoanObj = data;
                this.isLoader = false;
            }, error => {
                console.log(error);
                this.isLoader = false;
            });
        }
    }

    closeShortTermLoan() {
        this.shortTermLoanObj.status = '0';
        this.isLoader = true;
        this.loanService.closeShortTermLoan(this.shortTermLoanObj).then((data: any) => {
            this.toster.message("Successfully Closed");
            this.isLoader = false;
        }, error => {
                console.log(error);
            this.isLoader = false;
        });
    }

}
