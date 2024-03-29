import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../../Module/payment-detail';
import { LoanRepo } from '../../Module/loan-repo';
import { LoanserviceService } from '../../Services/loanservice.service';
import { AppConstants } from '../../Module/app-constants';

@Component({
  templateUrl: 'loan-repo.component.html',
  
})
export class LoanRepoComponent implements OnInit {
  loanRepoDetails: Array<LoanRepo> = [];
  fileUrl;
  totalPrince:number=0;
  totalLoan:number=0;
  totalCollection:number=0;
  pendingCollection:number=0;
  totalAccounts:number=0;
  totalEarning:number=0;
  totalPenalty:number=0;
  totalInterest:number=0;
  totalProcessFess:number=0;
  totalDisbursed:number=0;
  constructor(private loanservice: LoanserviceService) { }

  ngOnInit() {
  }

  onStatusChange(loanStatus){
    this.totalPrince=0;
    this.totalLoan=0;
    this.totalCollection=0;
    this.pendingCollection=0;
    this.totalAccounts=0;
    this.totalEarning=0;
    this.totalInterest=0;
    this.fileUrl= AppConstants.API_ENDPOINT+"/Loan/download-loan-accounts/"+loanStatus;
    this.loanservice.getLoanDetailByStatus(loanStatus).subscribe(data => {
      this.loanRepoDetails=data;
      this. loanRepoDetails.forEach(element => {
        this.totalPrince = this.totalPrince + (element.principalAmount);
        this.totalLoan = this.totalLoan + (element.loanAmt);
        this.pendingCollection = this.pendingCollection + (element.remainCollection);
        this.totalCollection = this.totalCollection + (element.totalCollection);
        this.totalEarning = this.totalEarning + (element.totalEarned);
        this.totalPenalty=this.totalPenalty+(element.totalPenalty);
        this.totalInterest=this.totalInterest+(element.totalInterest);
        this.totalProcessFess=this.totalProcessFess+(element.proceessingFee);
        this.totalDisbursed=this.totalDisbursed+(element.disburseAmt);
        
        });
       this.totalAccounts=this.loanRepoDetails.length;
     })
}

}
