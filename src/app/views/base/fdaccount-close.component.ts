import { Component, OnInit } from '@angular/core';
import { FDAccount } from '../../Module/fdaccount';
import { FDServiceService } from '../../Services/fdservice.service';

@Component({
  templateUrl: './fdaccount-close.component.html',
})
export class FDAccountCloseComponent implements OnInit {
  fdAccountDtls:FDAccount=new FDAccount();
  constructor(private fdService: FDServiceService) { }

  ngOnInit() {
  }

  getAccountDetail(fdId){
    if(fdId==""){
      alert("Please enter FD Account id")
    }else{
     this.fdService.getFDDetailByFDId(fdId).subscribe(data => {
       this.fdAccountDtls=data;
    
      })
    }
   
   }
   calculateItersetAmt(){
    this.fdAccountDtls.interestAmt=(this.fdAccountDtls.amount/100)*(this.fdAccountDtls.interest);
  console.log("test "+" "+this.fdAccountDtls.interest+" " +this.fdAccountDtls.interestAmt);
  }

  closeFD():void{
      this.fdService.closeFD(this.fdAccountDtls).subscribe(data => {
      this.fdAccountDtls=data;
      alert("Successfully Closed");
      })
    }
   
  };

