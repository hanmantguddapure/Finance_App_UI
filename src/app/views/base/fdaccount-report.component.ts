import { Component, OnInit } from '@angular/core';
import { FDAccount } from '../../Module/fdaccount';
import { FDServiceService } from '../../Services/fdservice.service';

@Component({

    templateUrl: './fdaccount-report.component.html',

})
export class FDAccountReportComponent implements OnInit {
    fdReports: Array<FDAccount> = [];
    totalFD: number = 0;
    totalInterest: number = 0;
    total: number = 0;
    totalAccounts: number = 0;
    constructor(private fdservice: FDServiceService) { }

    ngOnInit() {
    }

    onStatusChange(event: any) {
        let fdStatus = event.target.value;
        this.totalFD = 0
        this.totalInterest = 0;
        this.total = 0;
        this.totalAccounts = 0;
        this.fdservice.getFdsByStatus(fdStatus).subscribe(data => {
            this.fdReports = data;
            this.fdReports.forEach(element => {
                this.totalFD = this.totalFD + (element.amount);
                this.totalInterest = this.totalInterest + (element.interestAmt);
            });
            this.total = this.totalFD + this.totalInterest;
            this.totalAccounts = this.fdReports.length;
        })
    }
}
