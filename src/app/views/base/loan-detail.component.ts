import { Component, OnInit } from '@angular/core';
import { LoanserviceService } from '../../Services/loanservice.service';
import { PaymentDetail } from '../../Module/payment-detail';
import { Loandetail } from '../../Module/loandetail';
import { AppConstants } from '../../Module/app-constants';

@Component({
 
  templateUrl: './loan-detail.component.html',
 
})
export class LoanDetailComponent implements OnInit {
  loanDetail:Loandetail=new Loandetail();
  installmentMissedRequiredColl:number;
  loanPaymetDetails: Array<PaymentDetail> = [];
  constructor(private loanservice: LoanserviceService) { }
  fileUrl;
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
       this.installmentMissedRequiredColl=this.loanDetail.pendingAmount+this.loanDetail.depositeAmt;
        this.loanDetail.totalInstallments=this.loanPaymetDetails.length;
        this.fileUrl= AppConstants.API_ENDPOINT+"/Loan/download-loan-dtl/"+loanId;
      })
    }
   
   }

}
