import { Component, OnInit } from '@angular/core';

import { ToastService } from 'src/shared/services/toast.service';
import { FirmLoan } from 'src/shared/modals/firm-loan';
import { LoanserviceService } from 'src/shared/providers/loanservice.service';

@Component({
    templateUrl: './report.component.html'
})
export class ReportComponent implements OnInit {
    firmLoanObjs: Array<FirmLoan> = [];
    totalLoan: number | any;
    totalInterest: number | any;
    constructor(private toster: ToastService, private loanService: LoanserviceService) { }
    ngOnInit() {
    }
    onStatusChange(event: any) {
        let loanStatus = event.target.value;
        this.totalLoan = 0;
        this.totalInterest = 0;
        this.loanService.getAllFirmLoan(loanStatus).subscribe(data => {
            this.firmLoanObjs = data;
            this.firmLoanObjs.forEach(element => {
                this.totalLoan = this.totalLoan + (element.loanAmt);
                if (element.interestAmt != null)
                    this.totalInterest = this.totalInterest + (element.interestAmt);

            });
        })
    }

}
