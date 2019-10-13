import { Component, OnInit } from '@angular/core';
import { FirmLoan } from '../../Module/firm-loan';
import { LoanserviceService } from '../../Services/loanservice.service';

@Component({
  templateUrl: './firm-loan-repo.component.html',
 
})
export class FirmLoanRepoComponent implements OnInit {
firmLoanObjs: Array<FirmLoan> = [];
totalLoan:number;
totalInterest:number;
  constructor(private loanService:LoanserviceService) { }
  ngOnInit() {
  }
  onStatusChange(loanStatus){
   this.totalLoan=0;
   this.totalInterest=0;
    this.loanService.getAllFirmLoan(loanStatus).subscribe(data => {
      this.firmLoanObjs=data;
      this. firmLoanObjs.forEach(element => {
        this.totalLoan = this.totalLoan + (element.loanAmt);
        if(element.interestAmt!=null)
          this.totalInterest = this.totalInterest + (element.interestAmt);
       
        });
     })
}
      
}
