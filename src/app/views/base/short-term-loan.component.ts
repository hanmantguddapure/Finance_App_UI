import { Component, OnInit } from '@angular/core';
import { ShortTermLoan } from '../../Module/short-term-loan';
import { LoanserviceService } from '../../Services/loanservice.service';

@Component({

  templateUrl: './short-term-loan.component.html',
  
})
export class ShortTermLoanComponent implements OnInit {

  shortTermLoanObj:ShortTermLoan=new ShortTermLoan();
  constructor(private loanservice:LoanserviceService) { }

  ngOnInit() {
  }
  createNewShortTermLoan():void{
    this.loanservice.createNewShortTermLoan(this.shortTermLoanObj).subscribe(data => {
      alert("Successfully Added");
      })
    
  };

}
