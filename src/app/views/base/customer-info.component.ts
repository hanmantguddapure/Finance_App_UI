import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../Services/customerservice.service';
import { Customer } from '../../Module/customer';
import { AppConstants } from '../../Module/app-constants';
import { Address } from '../../Module/address';

@Component({
  templateUrl: 'customer-info.component.html'
})
export class CustomerInfoComponent implements OnInit {
  allCustomerList = [];
  constructor(private customerService: CustomerserviceService) { }
  custInfo:Customer=new Customer();
  addressDetail:Address=new Address();
  conatactPersionList: Array<Customer> = [];
  editProfession: boolean = true;
  editAdhar: boolean = true;
  editPan: boolean = true;
  editAddress:boolean=true;
  editPostalCode:boolean=true;
  editEmail:boolean=true;
  editPhone:boolean=true;
  isEiditable:boolean=false;
  isEnableAdd:boolean=false;
  editCache = {};
  fileUrl;
    ngOnInit() {
      this.customerService.getCustomerAllDetail().subscribe(data => {
      this.allCustomerList=data;
     })
  }

  getCustomerDetail(custId){
    if(custId==""){
      alert("Please Select Customer")
    }else{
     this.customerService.getCustomerDetail(custId).subscribe(data => {
       this.custInfo=data;
       this.addressDetail=this.custInfo.address;
       this.fileUrl= AppConstants.API_ENDPOINT+"/customer/download/"+custId;
    
      })
      this.customerService.getCustomerContactPeoples(custId).subscribe(data => {
        this.conatactPersionList=data;
       
       })
    }
   }
   editCustContact(custContactDtls){
    this.customerService.editCustContactPersionDetail(custContactDtls).subscribe(data => {
     alert("Save Changes Successfully");
      this.editCache[custContactDtls.contactPersionId] = false;
     
     })
   }
   enableAdd(){
     this.isEnableAdd=true;
   }
   allowEdit(key: string): void {
    console.log(key);
    this.editCache[key] = true;
    console.log(this.editCache[key]);
  }
  saveCustContactPersionDetail(custContactPersion):void{
   custContactPersion.custId=this.custInfo.custId;
     this.customerService.saveCustContactPersionDetail(custContactPersion).subscribe(data => {
       this.conatactPersionList.push(custContactPersion);
       this.isEnableAdd=false;
        alert("Added Successfully")
      })
    };
  
   editCustInfo(){
    this.custInfo.address=this.addressDetail;
    this.customerService.editCustomerDetail(this.custInfo).subscribe(data => {
      this.custInfo=data;
      this.editProfession=true;
      this.isEiditable=false;
      this.editAdhar=true;
      this.editPan=true;
      this.editPostalCode=true;
      this.editAddress=true;
      this.editEmail=true;
      this.editPhone=true;
      alert("Save Changes Successfull");
    })
   }
   enableProfession(){
    this.editProfession=false;
    this.isEiditable=true;
   }
   enableAdharNo(){
    this.editAdhar=false;
    this.isEiditable=true;
   }
   enablePan(){
    this.editPan=false;
    this.isEiditable=true;
   }
   enableAddress(){
    this.editAddress=false;
    this.isEiditable=true;
   }
   enablePostalCode(){
    this.editPostalCode=false;
    this.isEiditable=true;
   }
   enableEmail(){
    this.editEmail=false;
    this.isEiditable=true;
   }
   enablePhone(){
    this.editPhone=false;
    this.isEiditable=true;
   }
   

}
