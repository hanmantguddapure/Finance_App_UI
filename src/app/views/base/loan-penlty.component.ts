import { Component, OnInit } from '@angular/core';
import { LoanPenalty } from '../../Module/loan-penalty';
import { LoanserviceService } from '../../Services/loanservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  
  templateUrl: './loan-penlty.component.html',
})
export class LoanPenltyComponent {
  loanPenalties: Array<LoanPenalty> = [];
  loanPenlty:LoanPenalty=new LoanPenalty();
  isValidate: boolean = true;
  constructor(private loanservice: LoanserviceService,private router: Router, private route: ActivatedRoute) { }
  
getPenaltyDetail(loanId){
 if(loanId==""){
   alert("Please enter loan id")
 }else{
  this.loanservice.getLoanPenltyByLoanId(loanId).subscribe(data => {
    this.loanPenalties=data;
   
   })
 }

}

addPenalty(penaltyDtls):void{
  
  this.loanPenlty=penaltyDtls;
  
  if(this.loanPenlty.loanAccountId==undefined){
    alert("Please enter loan id")
    this.isValidate=false;
  }
  if(this.loanPenlty.penaltyAmt==undefined){
    alert("Please enter penalty")
    this.isValidate=false;
  }
  if(this.loanPenlty.remark==""||this.loanPenlty.remark==undefined){
    alert("Please enter remark")
    this.isValidate=false;
  }
  if(this.isValidate){
    this.loanservice.addLoanPenlty(this.loanPenlty).subscribe(data => {
      if(this.loanPenalties==null){
        this.loanPenalties= [];
      }
      this.loanPenalties.push(this.loanPenlty);
      alert("Added Successfully");
     })
  }
  
};



}
