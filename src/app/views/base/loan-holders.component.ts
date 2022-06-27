import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../Services/customerservice.service';
import { LoanserviceService } from '../../Services/loanservice.service';
import { LoanRepo } from 'src/shared/modals/loan-repo';
import { ToastService } from 'src/shared/services/toast.service';

@Component({

    templateUrl: './loan-holders.component.html',

})
export class LoanHoldersComponent implements OnInit {
    allCustomerList: any;
    loanRepoDetails: Array<LoanRepo> = [];
    totalPrince: number = 0;
    totalLoan: number = 0;
    totalCollection: number = 0;
    pendingCollection: number = 0;
    totalAccounts: number = 0;
    totalEarning: number = 0;
    totalPenalty: number = 0;
    totalInterest: number = 0;
    totalProcessFess: number = 0;
    totalDisbursed: number = 0;
    constructor(private toster: ToastService, private customerService: CustomerserviceService, private loanService: LoanserviceService) { }

    ngOnInit() {
        this.customerService.getCustomerAllDetail().subscribe(data => {
            this.allCustomerList = data;
        })
    }

    onStatusChange(event: any) {
        let custId = event.target.value;
        this.totalPrince = 0;
        this.totalLoan = 0;
        this.totalCollection = 0;
        this.pendingCollection = 0;
        this.totalAccounts = 0;
        this.totalEarning = 0;
        this.totalInterest = 0;
        this.loanService.getLoanDetailByCustId(custId).subscribe(data => {
            this.loanRepoDetails = data;
            this.loanRepoDetails.forEach(element => {
                this.totalPrince = this.totalPrince + (element.principalAmount);
                this.totalLoan = this.totalLoan + (element.loanAmt);
                this.pendingCollection = this.pendingCollection + (element.remainCollection);
                this.totalCollection = this.totalCollection + (element.totalCollection);
                this.totalEarning = this.totalEarning + (element.totalEarned);
                this.totalPenalty = this.totalPenalty + (element.totalPenalty);
                this.totalInterest = this.totalInterest + (element.totalInterest);
                this.totalProcessFess = this.totalProcessFess + (element.proceessingFee);
                this.totalDisbursed = this.totalDisbursed + (element.disburseAmt);

            });
        })
    }

}
