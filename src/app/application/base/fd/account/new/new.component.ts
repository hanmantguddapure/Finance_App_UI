import { Component, OnInit } from '@angular/core';

import { FDAccount } from 'src/shared/modals/fdaccount';

import { ToastService, FDService, CustomerService } from 'src/shared';

@Component({
    templateUrl: './new.component.html'
})

export class NewComponent implements OnInit {
    allCustomerList: any;
    fdAccount: FDAccount = new FDAccount(null);
    validationFlag: boolean = true;
    isLoader: boolean;

    constructor(private toster: ToastService, private customerService: CustomerService, private fdService: FDService) {
        this.isLoader = false;
    }

    ngOnInit() {
        this.isLoader = true;
        this.customerService.getCustomerAllDetail().then((data: any) => {
            this.allCustomerList = data.response;
            this.isLoader = false;
        }, error => {
                console.log(error);
            this.isLoader = false;
        });
    }

    calculateItersetAmt() {
        this.fdAccount.interestAmt = (this.fdAccount.amount / 100) * (this.fdAccount.interest);

    }

    createNewFD(): void {
        this.validationFlag = true;
        this.checkValidation();
        if (this.validationFlag) {
            this.isLoader = true;
            this.fdService.createNewFD(this.fdAccount).then((data: any) => {
                this.fdAccount = data;
                this.toster.message("Successfully Created New FD");
                this.isLoader = false;
            }, error => {
                console.log(error);
                this.isLoader = false;
            });
        }
    };

    checkValidation() {
        if (this.fdAccount.custId == undefined) {
            this.toster.message("Please Select Customer");
            this.validationFlag = false;
        }
        if (this.fdAccount.amount == undefined) {
            this.toster.message("Please Enter FD Amount");
            this.validationFlag = false;
        }
        if (this.fdAccount.interest == undefined) {
            this.toster.message("Please Enter  Interest ");
            this.validationFlag = false;
        }

        if (this.fdAccount.startDate == undefined) {
            this.toster.message("Please Enter Start Date");
            this.validationFlag = false;
        }
        if (this.fdAccount.endDate == undefined) {
            this.toster.message("Please Enter End Date");
            this.validationFlag = false;
        }
    }

}
