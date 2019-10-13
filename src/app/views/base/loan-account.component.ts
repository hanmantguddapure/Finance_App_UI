import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../Services/customerservice.service';
import { Customer } from '../../Module/customer';
import { Router, ActivatedRoute } from '@angular/router';
import { LoanserviceService } from '../../Services/loanservice.service';
import { Loandetail } from '../../Module/loandetail';
import { FormGroup } from '@angular/forms';

@Component({
  templateUrl: 'loan-account.component.html'
})
export class LoanAccountComponent implements OnInit  {
  
  constructor(private customerService: CustomerserviceService,private loanservice: LoanserviceService,private router: Router, private route: ActivatedRoute) { }
  customer:Customer=new Customer();
  registrationForm:FormGroup
  loanDetail:Loandetail=new Loandetail();
  isCollapsed: boolean = false;
  validationFlag:boolean=true;
  iconCollapse: string = 'icon-arrow-up';

  allCustomerList = [];

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }


  ngOnInit() {
    this.customerService.getCustomerAllDetail().subscribe(data => {
      this.allCustomerList=data;
     })
   };
   saveLoanDetail():void{
    this.validationFlag=true;
    this.checkValidation();
    if(this.validationFlag){
      this.loanservice.saveLoanDetail(this.loanDetail).subscribe(data => {
      this.loanDetail=data;
      alert("Successfully Created New Loan Account");
      })
    }
   
  };

  calculateItersetAmt(){
    this.loanDetail.interestAmt=(this.loanDetail.principalAmount/100)*parseFloat(this.loanDetail.interest);
    this.loanDetail.processingFees=500;
    this.loanDetail.installMentType="Daily";
    this.loanDetail.installments=100;
    this.calculateDepositeAmt();

  }
  calculateDepositeAmt(){
    this.loanDetail.depositeAmt=(this.loanDetail.principalAmount/100)*5;
    this.calculateLoanAmt();
  }
  calculateLoanAmt(){
    this.loanDetail.loanAmt=this.loanDetail.principalAmount-this.loanDetail.interestAmt-this.loanDetail.processingFees-this.loanDetail.depositeAmt;
 this.calculateInstallmentType();
  }
  calculateInstallmentType(){
    this.loanDetail.installmentAmount=(this.loanDetail.principalAmount/this.loanDetail.installments);
   
  }
  checkValidation(){
    if(this.loanDetail.custId==undefined){
      alert("Please Select Customer");
      this.validationFlag= false;
    }
    if(this.loanDetail.principalAmount==undefined){
      alert("Please Enter Principal Amount");
      this.validationFlag= false;
    }
    if(this.loanDetail.interest==undefined){
      alert("Please Enter Loan Interest ");
      this.validationFlag= false;
    }
    if(this.loanDetail.interestAmt==undefined){
      alert("Please Enter Interest Amount");
      this.validationFlag=false;
    }
    if(this.loanDetail.depositeAmt==undefined){
      alert("Please Enter Deposite Amount");
      this.validationFlag= false;
    }
    if(this.loanDetail.processingFees==undefined){
      alert("Please Enter Processing Fees");
      this.validationFlag= false;
    }
    if(this.loanDetail.loanAmt==undefined){
      alert("Please Enter Loan Amount");
      this.validationFlag= false;
    }
    if(this.loanDetail.loanStartDate==undefined){
      alert("Please Enter Loan Start Date");
      this.validationFlag= false;
    }
    if(this.loanDetail.loanEndDate==undefined){
      alert("Please Enter Loan End Date");
      this.validationFlag= false;
    }
    if(this.loanDetail.installMentType==undefined){
      alert("Please Enter Collection Type");
      this.validationFlag= false;
    }
    if(this.loanDetail.installments==undefined){
      alert("Please Enter Installments");
      this.validationFlag= false;
    }
    if(this.loanDetail.installmentAmount==undefined){
      alert("Please Enter Installment Amount");
      this.validationFlag= false;
    }

  }
  
}
