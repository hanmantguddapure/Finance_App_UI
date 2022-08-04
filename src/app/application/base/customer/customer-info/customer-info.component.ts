import { Component, OnInit } from '@angular/core';

import { CustomerserviceService } from 'src/shared/providers/customerservice.service';
import { ToastService } from 'src/shared/services/toast.service';

import { Address } from 'src/shared/modals/address';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: 'customer-info.component.html'
})
export class CustomerInfoComponent implements OnInit {

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
    CustomerGroup: any;
    isLoader: boolean;

    constructor(
        private toster: ToastService,
        private fb: FormBuilder,
        private customerService: CustomerserviceService) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.CustomerGroup = this.fb.group({
            custId: [''],
            fullName: ['', [Validators.required]],
            shortName: [''],
            profession: [''],
            adharNo: [''],
            panNo: [''],
            professionName: [''],
            address: this.fb.group({
                address: [''],
                zipCode: [''],
                email: [''],
                phoneNo: [''],
                nativePlace: [''],
                altNo: ['']
            }),
            contactPeopleDtls: this.fb.array([]),
            nomineeDtls: this.fb.array([])
        });
    }

    saveCustomerPersionDetail() {
        if (this.CustomerGroup.invalid) {
            this.toster.error("Please fill required fields");
            return;
        }
        this.isLoader = true;
        let customer = this.CustomerGroup.getRawValue();

        this.customerService.saveCustomerDetail(customer).then(data => {
            this.isLoader = false;
            this.toster.success(customer.custId ? "Customer updated Successfully" : "New Customer Created Successfully")
        }, error => {
            this.isLoader = false;
        })
    };

}
