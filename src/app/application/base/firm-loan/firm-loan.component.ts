import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/shared/services/toast.service';
import { FirmLoan } from 'src/shared/modals/firm-loan';
import { LoanserviceService } from 'src/shared/providers/loanservice.service';

@Component({
    templateUrl: './firm-loan.component.html'
})
export class FirmLoanComponent implements OnInit {
    firmLoanObj: FirmLoan = new FirmLoan(null);
    constructor(private toster: ToastService, private loanservice: LoanserviceService) { }

    ngOnInit() {
    }

    createNewFirmLoan(): void {
        this.loanservice.createNewFirmLoan(this.firmLoanObj).subscribe(data => {
            this.toster.success("Successfully Added");
        });
    };
}
