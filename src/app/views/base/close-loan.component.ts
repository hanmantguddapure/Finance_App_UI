import { Component, OnInit } from '@angular/core';
import { Loandetail } from '../../Module/loandetail';
import { PaymentDetail } from '../../Module/payment-detail';
import { LoanserviceService } from '../../Services/loanservice.service';

@Component({
 
  templateUrl: './close-loan.component.html',
  
})
export class CloseLoanComponent implements OnInit {
  loanDetail:Loandetail=new Loandetail();
  loanPaymetDetails: Array<PaymentDetail> = [];
  constructor(private loanservice: LoanserviceService) { }

  ngOnInit() {
  }
  getAccountDetail(loanId){
    if(loanId==""){
      alert("Please enter loan id")
    }else{
     this.loanservice.getLoanDetailByLoanId(loanId).subscribe(data => {
       this.loanDetail=data;
       this.loanDetail.pendingAmount=this.loanDetail.principalAmount-this.loanDetail.totalCollection-this.loanDetail.depositeAmt;
       this.loanPaymetDetails=this.loanDetail.loanCollections;
        this.loanDetail.totalInstallments=this.loanPaymetDetails.length;
      })
    }
   
   }

  
   closeLoanAccount(loanDetail):void{
      if(this.loanDetail.custId==undefined){
      alert("please Enter CustId")
    }else{
      this.loanDetail.loanStatus=loanDetail.loanStatus;
        this.loanDetail.remark=loanDetail.remark;
        this.loanservice.closeLoanAccount(this.loanDetail).subscribe(data => {
         alert("Closed Successfully")
        })
      }
    };

}
