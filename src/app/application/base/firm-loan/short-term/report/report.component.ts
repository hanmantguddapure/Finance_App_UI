import { Component, OnInit } from '@angular/core';

import { ShortTermLoan } from 'src/shared/modals/short-term-loan';

import { CustomerService, LoanService, ToastService } from 'src/shared';

@Component({
    templateUrl: './report.component.html',
})
export class ReportComponent implements OnInit {
    shortTermLoans: Array<ShortTermLoan> = [];
    totalLoan: number;
    isLoader: boolean;

    constructor(private toster: ToastService, private loanService: LoanService) {
        this.totalLoan = 0;
        this.isLoader = false;
    }

    ngOnInit() {
    }

    onStatusChange(event: any) {
        let loanStatus = event.target.value
        this.totalLoan = 0;
        this.isLoader = true;
        this.loanService.getAllShortTermLoan(loanStatus).then((data: any) => {
            this.shortTermLoans = data;
            this.shortTermLoans.forEach(element => {
                this.totalLoan = this.totalLoan + (element.loanAmt);
            });
            this.isLoader = false;
        }, errot => {
            this.isLoader = false;
        });
    }
}
