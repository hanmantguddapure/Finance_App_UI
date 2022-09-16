import { Component, OnInit } from '@angular/core';

import { FirmLoan } from 'src/shared/modals/firm-loan';

import { ToastService, LoanService } from 'src/shared';

@Component({
    templateUrl: './new.component.html'
})
export class NewComponent implements OnInit {
    firmLoanObj: FirmLoan = new FirmLoan(null);
    isLoader: boolean;
    constructor(private toster: ToastService, private loanservice: LoanService) {
        this.isLoader = false;
    }

    ngOnInit() {
    }

    createNewFirmLoan(): void {
        this.isLoader = true;
        this.loanservice.createNewFirmLoan(this.firmLoanObj).then((data: any) => {
            this.toster.message("Successfully Added");
            this.isLoader = false;
        }, error => {
                console.log(error);
            this.isLoader = false;
        });
    };
}
