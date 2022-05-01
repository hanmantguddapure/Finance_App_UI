import { Component, OnInit } from '@angular/core';
import { FirmLoan } from '../../Module/firm-loan';
import { LoanserviceService } from '../../Services/loanservice.service';

@Component({

    templateUrl: './firm-loan-close.component.html',

})
export class FirmLoanCloseComponent implements OnInit {
    firmLoanObj: FirmLoan = new FirmLoan(null);
    constructor(private loanService: LoanserviceService) { }

    ngOnInit() {
    }

    getAccountDetail(event: any) {
        let firmLoanId = event.target.value;
        if (firmLoanId == "") {
            alert("Please enter Account id")
        } else {
            this.loanService.getFirmLoanById(firmLoanId).subscribe(data => {
                this.firmLoanObj = data;

            })
        }

    }
    closeFirmLoan() {
        this.firmLoanObj.isActive = 0;
        this.loanService.closeFirmLoan(this.firmLoanObj).subscribe(data => {
            alert("Successfully Closed");
        })
    }
}
