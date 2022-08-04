import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/shared/services/toast.service';
import { ShortTermLoan } from 'src/shared/modals/short-term-loan';
import { LoanserviceService } from 'src/shared/providers/loanservice.service';

@Component({

    templateUrl: './short-term-loan.component.html',

})
export class ShortTermLoanComponent implements OnInit {

    shortTermLoanObj: ShortTermLoan = new ShortTermLoan(null);
    constructor(private toster: ToastService, private loanservice: LoanserviceService) { }

    ngOnInit() {
    }
    createNewShortTermLoan(): void {
        this.loanservice.createNewShortTermLoan(this.shortTermLoanObj).subscribe(data => {
            this.toster.success("Successfully Added");
        })
    };

}
