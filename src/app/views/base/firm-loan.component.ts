import { Component, OnInit } from '@angular/core';
import { FirmLoan } from '../../Module/firm-loan';
import { LoanserviceService } from '../../Services/loanservice.service';

@Component({

    templateUrl: './firm-loan.component.html',

})
export class FirmLoanComponent implements OnInit {
    firmLoanObj: FirmLoan = new FirmLoan(null);
    constructor(private loanservice: LoanserviceService) { }

    ngOnInit() {
    }
    createNewFirmLoan(): void {
        this.loanservice.createNewFirmLoan(this.firmLoanObj).subscribe(data => {
            alert("Successfully Added");
        })

    };
}
