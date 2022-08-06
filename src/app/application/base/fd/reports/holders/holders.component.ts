import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from 'src/shared/providers/customerservice.service';
import { FDAccount } from 'src/shared/modals/fdaccount';
import { FDServiceService } from 'src/shared/providers/fdservice.service';
import { ToastService } from 'src/shared/services/toast.service';

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
    constructor(private toster: ToastService, private customerService: CustomerserviceService, private fdService: FDServiceService) { }

    ngOnInit() {
        this.customerService.getCustomerAllDetail().subscribe(data => {
            this.allCustomerList = data;
        })
    }
    onStatusChange(event: any) {
        let custId = event.target.value;
        this.totalFD = 0
        this.totalInterest = 0;
        this.total = 0;
        this.totalAccounts = 0;
        this.fdService.getCustFDLst(custId).subscribe(data => {
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