import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../Services/customerservice.service';
import { Customer } from 'src/shared/modals/customer';
import { AppConstants } from 'src/shared/modals/app-constants';
import { Address } from 'src/shared/modals/address';
import { ToastService } from 'src/shared/services/toast.service';

@Component({
    templateUrl: 'customer-info.component.html'
})
export class CustomerInfoComponent implements OnInit {
    allCustomerList: any;

    custInfo: Customer = new Customer(null);
    addressDetail: Address = new Address(null);
    conatactPersionList: any;
    editProfession: boolean = true;
    editAdhar: boolean = true;
    editPan: boolean = true;
    editAddress: boolean = true;
    editPostalCode: boolean = true;
    editEmail: boolean = true;
    editPhone: boolean = true;
    isEiditable: boolean = false;
    isEnableAdd: boolean = false;
    editCache: any;
    fileUrl: any;
    isWitnessValid: any;

    constructor(private toster: ToastService, private customerService: CustomerserviceService) { }
    ngOnInit() {
        this.customerService.getCustomerAllDetail().subscribe((data: any) => {
            this.allCustomerList = data;
        })
    }

    getCustomerDetail(event: any) {
        let custId = event.target.value;
        if (custId == "") {
            this.toster.error("Please Select Customer")
        } else {
            this.customerService.getCustomerDetail(custId).subscribe(data => {
                this.custInfo = data;
                this.addressDetail = this.custInfo.address;
                this.fileUrl = AppConstants.API_ENDPOINT + "/customer/download/" + custId;

            })
            this.customerService.getCustomerContactPeoples(custId).subscribe(data => {
                this.conatactPersionList = data;
            })
        }
    }
    editCustContact(custContactDtls: any) {
        this.customerService.editCustContactPersionDetail(custContactDtls).subscribe(data => {
            this.toster.success("Save Changes Successfully");
            this.editCache[custContactDtls.contactPersionId] = false;

        })
    }
    enableAdd() {
        this.isEnableAdd = true;
    }
    allowEdit(key: string): void {
        console.log(key);
        this.editCache[key] = true;
        console.log(this.editCache[key]);
    }
    saveCustContactPersionDetail(custContactPersion: any): void {
        custContactPersion.custId = this.custInfo.custId;
        this.customerService.saveCustContactPersionDetail(custContactPersion).subscribe(data => {
            this.conatactPersionList.push(custContactPersion);
            this.isEnableAdd = false;
            this.toster.success("Added Successfully")
        })
    };

    editCustInfo() {
        this.custInfo.address = this.addressDetail;
        this.customerService.editCustomerDetail(this.custInfo).subscribe(data => {
            this.custInfo = data;
            this.editProfession = true;
            this.isEiditable = false;
            this.editAdhar = true;
            this.editPan = true;
            this.editPostalCode = true;
            this.editAddress = true;
            this.editEmail = true;
            this.editPhone = true;
            this.toster.success("Save Changes Successfull");
        })
    }
    enableProfession() {
        this.editProfession = false;
        this.isEiditable = true;
    }
    enableAdharNo() {
        this.editAdhar = false;
        this.isEiditable = true;
    }
    enablePan() {
        this.editPan = false;
        this.isEiditable = true;
    }
    enableAddress() {
        this.editAddress = false;
        this.isEiditable = true;
    }
    enablePostalCode() {
        this.editPostalCode = false;
        this.isEiditable = true;
    }
    enableEmail() {
        this.editEmail = false;
        this.isEiditable = true;
    }
    enablePhone() {
        this.editPhone = false;
        this.isEiditable = true;
    }


}
