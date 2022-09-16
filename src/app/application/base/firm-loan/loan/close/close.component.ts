import { Component, OnInit } from '@angular/core';

import { FirmLoan } from 'src/shared/modals/firm-loan';

import { ToastService, LoanService } from 'src/shared';

@Component({
    templateUrl: './close.component.html',
})
export class CloseComponent implements OnInit {
    firmLoanObj: FirmLoan = new FirmLoan(null);
    isLoader: boolean;
    constructor(private toster: ToastService, private loanService: LoanService) {
        this.isLoader = false;
    }

    ngOnInit() {
    }

    getAccountDetail(event: any) {
        let firmLoanId = event.target.value;
        if (firmLoanId == "") {
            this.toster.message("Please enter Account id")
        } else {
            this.isLoader = true;
            this.loanService.getFirmLoanById(firmLoanId).then((data: any) => {
                this.firmLoanObj = data;
                this.isLoader = false;
            }, error => {
                console.log(error);
                this.isLoader = false;
            });
        }
    }

    closeFirmLoan() {
        this.firmLoanObj.isActive = 0;
        this.isLoader = true;
        this.loanService.closeFirmLoan(this.firmLoanObj).then((data: any) => {
            this.toster.message("Successfully Closed");
            this.isLoader = false;
        }, error => {
                console.log(error);
            this.isLoader = false;
        });
    }
}
