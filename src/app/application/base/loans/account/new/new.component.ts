import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Customer } from 'src/shared/modals/customer';
import { Loandetail } from 'src/shared/modals/loandetail';

import { CustomerService, LoanService, ToastService } from 'src/shared';

@Component({
    templateUrl: 'new.component.html'
})
export class NewComponent implements OnInit {
    isLoader: boolean;

    constructor(private toster: ToastService, private customerService: CustomerService, private loanservice: LoanService, private router: Router, private route: ActivatedRoute) {
        this.isLoader = false;
    }
    customer: Customer = new Customer(null);
    loanDetail: Loandetail = new Loandetail(null);
    isCollapsed: boolean = false;
    validationFlag: boolean = true;
    iconCollapse: string = 'icon-arrow-up';

    allCustomerList: any;

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
        this.isLoader = true;
        this.customerService.getCustomerAllDetail().then((data: any) => {
            this.allCustomerList = data.response;
            console.log(this.allCustomerList);


            this.isLoader = false;
        }, error => {
            console.log(error);
            this.isLoader = false;
        });
    };

    saveLoanDetail(): void {
        this.validationFlag = true;
        this.checkValidation();
        if (this.validationFlag) {
            this.isLoader = true;
            this.loanservice.saveLoanDetail(this.loanDetail).then((data: any) => {
                this.loanDetail = data;
                this.toster.message("Successfully Created New Loan Account");

                this.isLoader = false;
            }, error => {
                console.log(error);
                this.isLoader = false;
            });
        }

    };

    calculateItersetAmt() {
        this.loanDetail.interestAmt = (this.loanDetail.principalAmount / 100) * parseFloat(this.loanDetail.interest);
        this.loanDetail.processingFees = 500;
        this.loanDetail.installMentType = "Daily";
        this.loanDetail.installments = 100;
        this.calculateDepositeAmt();
    }

    calculateDepositeAmt() {
        this.loanDetail.depositeAmt = (this.loanDetail.principalAmount / 100) * 5;
        this.calculateLoanAmt();
    }

    calculateLoanAmt() {
        this.loanDetail.loanAmt = this.loanDetail.principalAmount - this.loanDetail.interestAmt - this.loanDetail.processingFees - this.loanDetail.depositeAmt;
        this.calculateInstallmentType();
    }

    calculateInstallmentType() {
        this.loanDetail.installmentAmount = (this.loanDetail.principalAmount / this.loanDetail.installments);
    }

    checkValidation() {
        if (this.loanDetail.custId == undefined) {
            this.toster.message("Please Select Customer");
            this.validationFlag = false;
        }
        if (this.loanDetail.principalAmount == undefined) {
            this.toster.message("Please Enter Principal Amount");
            this.validationFlag = false;
        }
        if (this.loanDetail.interest == undefined) {
            this.toster.message("Please Enter Loan Interest ");
            this.validationFlag = false;
        }
        if (this.loanDetail.interestAmt == undefined) {
            this.toster.message("Please Enter Interest Amount");
            this.validationFlag = false;
        }
        if (this.loanDetail.depositeAmt == undefined) {
            this.toster.message("Please Enter Deposite Amount");
            this.validationFlag = false;
        }
        if (this.loanDetail.processingFees == undefined) {
            this.toster.message("Please Enter Processing Fees");
            this.validationFlag = false;
        }
        if (this.loanDetail.loanAmt == undefined) {
            this.toster.message("Please Enter Loan Amount");
            this.validationFlag = false;
        }
        if (this.loanDetail.loanStartDate == undefined) {
            this.toster.message("Please Enter Loan Start Date");
            this.validationFlag = false;
        }
        if (this.loanDetail.loanEndDate == undefined) {
            this.toster.message("Please Enter Loan End Date");
            this.validationFlag = false;
        }
        if (this.loanDetail.installMentType == undefined) {
            this.toster.message("Please Enter Collection Type");
            this.validationFlag = false;
        }
        if (this.loanDetail.installments == undefined) {
            this.toster.message("Please Enter Installments");
            this.validationFlag = false;
        }
        if (this.loanDetail.installmentAmount == undefined) {
            this.toster.message("Please Enter Installment Amount");
            this.validationFlag = false;
        }

    }

}
