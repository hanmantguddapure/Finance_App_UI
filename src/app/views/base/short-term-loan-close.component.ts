import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/Services/toast.service';
import { ShortTermLoan } from '../../Module/short-term-loan';
import { LoanserviceService } from '../../Services/loanservice.service';

@Component({

    templateUrl: './short-term-loan-close.component.html',

})
export class ShortTermLoanCloseComponent implements OnInit {

    shortTermLoanObj: ShortTermLoan = new ShortTermLoan(null);
    constructor(private toster: ToastService, private loanService: LoanserviceService) { }

    ngOnInit() {
    }

    getAccountDetail(event: any) {
        let shortTermLoanId = event.target.value
        if (shortTermLoanId == "") {
            this.toster.error("Please enter Account id")
        } else {
            this.loanService.getShortTermLoanById(shortTermLoanId).subscribe(data => {
                this.shortTermLoanObj = data;
            })
        }

    }
    closeShortTermLoan() {
        this.shortTermLoanObj.status = '0';
        this.loanService.closeShortTermLoan(this.shortTermLoanObj).subscribe(data => {
            this.toster.success("Successfully Closed");
        })
    }

}
