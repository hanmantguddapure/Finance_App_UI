import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/shared/services/toast.service';
import { FirmLoan } from 'src/shared/modals/firm-loan';
import { LoanserviceService } from '../../Services/loanservice.service';

@Component({

    templateUrl: './firm-loan-close.component.html',

})
export class FirmLoanCloseComponent implements OnInit {
    firmLoanObj: FirmLoan = new FirmLoan(null);
    constructor(private toster: ToastService, private loanService: LoanserviceService) { }

    ngOnInit() {
    }

    getAccountDetail(event: any) {
        let firmLoanId = event.target.value;
        if (firmLoanId == "") {
            this.toster.error("Please enter Account id")
        } else {
            this.loanService.getFirmLoanById(firmLoanId).subscribe(data => {
                this.firmLoanObj = data;

            })
        }

    }
    closeFirmLoan() {
        this.firmLoanObj.isActive = 0;
        this.loanService.closeFirmLoan(this.firmLoanObj).subscribe(data => {
            this.toster.success("Successfully Closed");
        })
    }
}
