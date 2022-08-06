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
            this.toster.error("Please enter Account id")
        } else {
            this.isLoader = true;
            this.loanService.getFirmLoanById(firmLoanId).subscribe(data => {
                this.firmLoanObj = data;
                this.isLoader = false;
            })
        }
    }

    closeFirmLoan() {
        this.firmLoanObj.isActive = 0;
        this.isLoader = true;
        this.loanService.closeFirmLoan(this.firmLoanObj).subscribe(data => {
            this.toster.success("Successfully Closed");
            this.isLoader = false;
        })
    }
}
