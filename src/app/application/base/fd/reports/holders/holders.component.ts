import { Component, OnInit } from '@angular/core';

import { FDAccount } from 'src/shared/modals/fdaccount';

import { ToastService, FDService, CustomerService } from 'src/shared';

@Component({
    templateUrl: './holders.component.html',
})
export class HoldersComponent implements OnInit {
    allCustomerList: any;
    fdAccount: FDAccount = new FDAccount(null);
    fdReports: Array<FDAccount> = [];
    totalFD: number = 0;
    totalInterest: number = 0;
    total: number = 0;
    totalAccounts: number = 0;
    isLoader: boolean;
    constructor(private toster: ToastService, private customerService: CustomerService, private fdService: FDService) {
        this.isLoader = false;
    }

    ngOnInit() {
        this.isLoader = true;
        this.customerService.getCustomerAllDetail().then((data: any) => {
            this.allCustomerList = data;
            this.isLoader = false;
        }, errot => {
            this.isLoader = false;
        });
    }

    onStatusChange(event: any) {
        let custId = event.target.value;
        this.totalFD = 0
        this.totalInterest = 0;
        this.total = 0;
        this.totalAccounts = 0;
        this.isLoader = true;
        this.fdService.getCustFDLst(custId).then((data: any) => {
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
