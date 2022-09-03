import { Component, OnInit } from '@angular/core';

import { ShortTermLoan } from 'src/shared/modals/short-term-loan';

import { CustomerService, LoanService, ToastService } from 'src/shared';

@Component({
    templateUrl: './new.component.html',
})
export class NewComponent implements OnInit {

    shortTermLoanObj: ShortTermLoan = new ShortTermLoan(null);
    isLoader: boolean;
    constructor(private toster: ToastService, private loanservice: LoanService) {
        this.isLoader = false;
    }

    ngOnInit() {
    }
    createNewShortTermLoan(): void {
        this.isLoader = true;
        this.loanservice.createNewShortTermLoan(this.shortTermLoanObj).then((data: any) => {
            this.toster.success("Successfully Added");
            this.isLoader = false;
        }, error => {
                console.log(error);
            this.isLoader = false;
        });
    }
}
