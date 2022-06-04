import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/Services/toast.service';
import { ShortTermLoan } from '../../Module/short-term-loan';
import { LoanserviceService } from '../../Services/loanservice.service';

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
