import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/shared/services/toast.service';
import { ShortTermLoan } from 'src/shared/modals/short-term-loan';
import { LoanserviceService } from 'src/shared/providers/loanservice.service';

@Component({

    templateUrl: './report.component.html',

})
export class ReportComponent implements OnInit {
    shortTermLoans: Array<ShortTermLoan> = [];
    totalLoan: number;

    constructor(private toster: ToastService, private loanService: LoanserviceService) {
        this.totalLoan = 0;
    }

    ngOnInit() {
    }

    onStatusChange(event: any) {
        let loanStatus = event.target.value
        this.totalLoan = 0;
        this.loanService.getAllShortTermLoan(loanStatus).subscribe(data => {
            this.shortTermLoans = data;
            this.shortTermLoans.forEach(element => {
                this.totalLoan = this.totalLoan + (element.loanAmt);
            });
        })
    }
}
