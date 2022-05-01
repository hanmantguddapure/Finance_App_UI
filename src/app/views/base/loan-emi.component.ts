import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../Services/customerservice.service';
import { LoanserviceService } from '../../Services/loanservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Loandetail } from '../../Module/loandetail';
import { PaymentDetail } from '../../Module/payment-detail';

@Component({
    templateUrl: 'loan-emi.component.html'
})
export class LoanEMIComponent {
    allCustomerList: any;
    loanPaymetDetails: Array<PaymentDetail> = [];
    loanDetail: Loandetail = new Loandetail(null);
    loanPaymentDetail: PaymentDetail = new PaymentDetail(null);
    isCollapsed: boolean = false;
    isValidate: boolean = false;
    checkDuplicate: boolean = false;
    currDate = new Date();
    collectionType = "Daily";
    iconCollapse: string = 'icon-arrow-up';
    constructor(private customerService: CustomerserviceService, private loanservice: LoanserviceService, private router: Router, private route: ActivatedRoute) { }
    collapsed(event: any): void {
        // console.log(event);
    }

    expanded(event: any): void {
        // console.log(event);
    }
    ngOnInit() {
        this.customerService.getCustomerAllDetail().subscribe(data => {
            this.allCustomerList = data;
        })
    };
    toggleCollapse(): void {
        this.isCollapsed = !this.isCollapsed;
        this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
    }
    /*  onCustomerChange(custId){
        console.log("test "+custId);
       this.loanservice.getLoanDetailByCustIdAndStatus(custId).subscribe(data => {
          this.customerLoanDetail=data;
          this.loanDetail=this.customerLoanDetail[0];
         
         })
    }*/

    getAccountDetail(event: any) {
        let loanId = event.target.value;
        if (loanId == "") {
            alert("Please enter loan id")
        } else {
            this.loanservice.getLoanDetailByLoanId(loanId).subscribe(data => {
                this.loanDetail = data;
                this.loanPaymetDetails = this.loanDetail.loanCollections;

            })
        }

    }

    addCustomerPayment(paymentDetail: any) {
        this.isValidate = true;
        this.loanPaymentDetail = paymentDetail;
        this.loanPaymentDetail.loanAccNo = this.loanDetail.loanAccountNo;
        this.loanPaymentDetail.paymentMethod = "Daily";
        this.loanservice.checkDuplicatePayment(this.loanDetail.loanAccountNo, paymentDetail.paymentDate).subscribe(data => {
            if (data) {
                this.checkDuplicate = true;
            }

        })
        if (this.checkDuplicate) {
            if (confirm("Payment Already Added On This Date,Are You Want Add Again")) {
                this.checkDuplicate = true;
            }
        }
        if (this.loanDetail.loanAccountNo == "" || this.loanDetail.loanAccountNo == undefined) {
            alert("Please enter loan id")
            this.isValidate = false;
        }
        if (paymentDetail.payment == "" || paymentDetail.payment == undefined) {
            alert("Please enter payment")
            this.isValidate = false;
        }
        if (paymentDetail.paymentDate == "" || paymentDetail.paymentDate == undefined) {
            alert("Please enter payment date")
            this.isValidate = false;
        }

        if (this.isValidate && !this.checkDuplicate) {
            this.loanservice.addCustomerPaymet(this.loanPaymentDetail).subscribe(data => {
                if (this.loanPaymetDetails == null) {
                    this.loanPaymetDetails = [];
                }
                this.loanPaymetDetails.push(this.loanPaymentDetail);
                alert("Added Successfully");
                this.checkDuplicate = false;
            })
        }

    };


}
