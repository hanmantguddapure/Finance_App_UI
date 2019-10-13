import { Component, OnInit } from '@angular/core';
import { Customer } from '../../Module/customer';
import { CustomerserviceService } from '../../Services/customerservice.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: 'customer.component.html'
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerserviceService,private router: Router, private route: ActivatedRoute) { }
  customer:Customer=new Customer();
  isCollapsed: boolean = false;
  isCustValid: boolean = false;
  isWitnessValid:boolean=false;
  iconCollapse: string = 'icon-arrow-up';
  custId:BigInteger;
  conatactPersionList: Array<Customer> = [];

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
  }
  saveCustomerPersionDetail(customer):void{
   if(customer.fullName==""){
     this.isCustValid=true;
   }else{
    this.isCustValid=false;
    this.customerService.saveCustomerDetail(customer).subscribe(data => {
      this.customer=data;
     
      this.custId=this.customer.custId;
      alert("New Customer Created Successfully")
    })
   }
   
  };
  saveCustContactPersionDetail(custContactPersion):void{
      if(this.customer.custId==undefined){
      alert("please submit customer detail")
    }else{
      if(custContactPersion.fullName==""){
        this.isWitnessValid=true;
       }else{
        this.isWitnessValid=false;
        this.customer=custContactPersion;
         this.customer.custId=this.custId;
        this.customerService.saveCustContactPersionDetail(custContactPersion).subscribe(data => {
         this.customer=data;
         this.conatactPersionList.push(this.customer);
          alert("Added Successfully")
        })
      };
       }
    }
  
   

}
