import { Component, OnInit } from '@angular/core';
import { ShortTermLoan } from '../../Module/short-term-loan';
import { LoanserviceService } from '../../Services/loanservice.service';

@Component({
  
  templateUrl: './short-term-loan-close.component.html',
  
})
export class ShortTermLoanCloseComponent implements OnInit {

  shortTermLoanObj:ShortTermLoan=new ShortTermLoan();
  constructor(private loanService:LoanserviceService) { }

  ngOnInit() {
  }

  getAccountDetail(shortTermLoanId){
    if(shortTermLoanId==""){
      alert("Please enter Account id")
    }else{
     this.loanService.getShortTermLoanById(shortTermLoanId).subscribe(data => {
       this.shortTermLoanObj=data;
      
      })
    }
   
   }
   closeShortTermLoan(){
     this.shortTermLoanObj.status='0';
    this.loanService.closeShortTermLoan(this.shortTermLoanObj).subscribe(data => {
     alert("Successfully Closed");
     })
   }

}
