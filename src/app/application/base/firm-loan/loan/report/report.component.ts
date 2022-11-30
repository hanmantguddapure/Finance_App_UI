import { Component, OnInit } from '@angular/core';

import { FirmLoan } from 'src/shared/modals/firm-loan';

import { ToastService, LoanService } from 'src/shared';

@Component({
    templateUrl: './report.component.html'
})
export class ReportComponent implements OnInit {
    firmLoanObjs: Array<FirmLoan> = [];
    totalLoan: number | any;
    totalInterest: number | any;
    isLoader: boolean;
    constructor(private toster: ToastService, private loanService: LoanService) {
        this.isLoader = false;
    }
    ngOnInit() {
    }
    onStatusChange(event: any) {
        let loanStatus = event.target.value;
        this.totalLoan = 0;
        this.totalInterest = 0;
        this.isLoader = true;
        this.loanService.getAllFirmLoan(loanStatus).then((data: any) => {
            this.firmLoanObjs = data;
            this.firmLoanObjs.forEach(element => {
                this.totalLoan = this.totalLoan + (element.loanAmt);
                if (element.interestAmt != null) {
                    this.totalInterest = this.totalInterest + (element.interestAmt);
                }
                this.isLoader = false;
            });
        }, error => {
                console.log(error);
            this.isLoader = false;
        });
    }

}
