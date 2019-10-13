import { Component, OnInit } from '@angular/core';
import { ShortTermLoan } from '../../Module/short-term-loan';
import { LoanserviceService } from '../../Services/loanservice.service';

@Component({

  templateUrl: './short-term-loan-repo.component.html',
 
})
export class ShortTermLoanRepoComponent implements OnInit {
  shortTermLoans: Array<ShortTermLoan> = [];
  totalLoan:number;
  constructor(private loanService:LoanserviceService) { }
    ngOnInit() {
    }
    onStatusChange(loanStatus){
     this.totalLoan=0;
    this.loanService.getAllShortTermLoan(loanStatus).subscribe(data => {
        this.shortTermLoans=data;
        this. shortTermLoans.forEach(element => {
          this.totalLoan = this.totalLoan + (element.loanAmt);
        });
      })
      }
      
}
