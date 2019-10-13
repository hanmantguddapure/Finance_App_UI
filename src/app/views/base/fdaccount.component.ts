import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../Services/customerservice.service';
import { FDAccount } from '../../Module/fdaccount';
import { Customer } from '../../Module/customer';
import { FDServiceService } from '../../Services/fdservice.service';

@Component({
  templateUrl: './fdaccount.component.html',
 
})
export class FDAccountComponent implements OnInit {
  allCustomerList = [];
  fdAccount:FDAccount=new FDAccount();
  validationFlag:boolean=true;
  constructor(private customerService: CustomerserviceService,private fdService: FDServiceService) { }
  ngOnInit() {
    this.customerService.getCustomerAllDetail().subscribe(data => {
      this.allCustomerList=data;
     })
  }

  calculateItersetAmt(){
    this.fdAccount.interestAmt=(this.fdAccount.amount/100)*(this.fdAccount.interest);
 
  }

  createNewFD():void{
    this.validationFlag=true;
    this.checkValidation();
    if(this.validationFlag){
      this.fdService.createNewFD(this.fdAccount).subscribe(data => {
      this.fdAccount=data;
      alert("Successfully Created New FD");
      })
    }
   
  };
  checkValidation(){
    if(this.fdAccount.custId==undefined){
      alert("Please Select Customer");
      this.validationFlag= false;
    }
    if(this.fdAccount.amount==undefined){
      alert("Please Enter FD Amount");
      this.validationFlag= false;
    }
    if(this.fdAccount.interest==undefined){
      alert("Please Enter  Interest ");
      this.validationFlag= false;
    }
   
    if(this.fdAccount.startDate==undefined){
      alert("Please Enter Start Date");
      this.validationFlag= false;
    }
    if(this.fdAccount.endDate==undefined){
      alert("Please Enter End Date");
      this.validationFlag= false;
    }
  }

}
