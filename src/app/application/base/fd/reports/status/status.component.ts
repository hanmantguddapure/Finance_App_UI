import { Component, OnInit } from '@angular/core';

import { FDAccount } from 'src/shared/modals/fdaccount';

import { ToastService, FDService } from 'src/shared';

@Component({
    templateUrl: './status.component.html',
})
export class StatusComponent implements OnInit {
    fdReports: Array<FDAccount> = [];
    totalFD: number = 0;
    totalInterest: number = 0;
    total: number = 0;
    totalAccounts: number = 0;
    isLoader: boolean;
    constructor(private toster: ToastService, private fdservice: FDService) {
        this.isLoader = false;
    }

    ngOnInit() {
    }

    onStatusChange(event: any) {
        let fdStatus = event.target.value;
        this.totalFD = 0
        this.totalInterest = 0;
        this.total = 0;
        this.totalAccounts = 0;
        this.isLoader = true;
        this.fdservice.getFdsByStatus(fdStatus).then((data: any) => {
            this.fdReports = data;
            this.fdReports.forEach(element => {
                this.totalFD = this.totalFD + (element.amount);
                this.totalInterest = this.totalInterest + (element.interestAmt);
            });
            this.total = this.totalFD + this.totalInterest;
            this.totalAccounts = this.fdReports.length;
            this.isLoader = false;
        }, errot => {
            this.isLoader = false;
        });
    }
}
