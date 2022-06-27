import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from 'src/app/services/customerservice.service';
import { LoanserviceService } from 'src/app/services/loanservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Loandetail } from 'src/shared/modals/loandetail';
import { PaymentDetail } from 'src/shared/modals/payment-detail';
import * as moment from 'moment';
import { ToastService } from 'src/shared/services/toast.service';
import { ModalService } from '@coreui/angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    templateUrl: 'loan-emi.component.html'
})
export class LoanEMIComponent {
    allCustomerList: any;
    loanPaymetDetails: Array<PaymentDetail> = [];
    loanDetail: any;
    loanPaymentDetail: PaymentDetail = new PaymentDetail(null);
    isCollapsed: boolean = false;
    isValidate: boolean = false;
    checkDuplicate: boolean = false;
    currDate = new Date();
    collectionType = "Daily";
    iconCollapse: string = 'icon-arrow-up';
    constructor(private toster: ToastService, private modalService: NgbModal, private customerService: CustomerserviceService, private loanservice: LoanserviceService, private router: Router, private route: ActivatedRoute) {
        // this.loanDetail = { loanAccountNo: 4, "custId": 4, "principalAmount": 100000.0, "interest": 10.0, "interestAmt": 10000.0, "depositeAmt": 5000.0, "processingFees": 500.0, "loanAmt": 84500.0, "loanStartDate": "2022-06-10", "loanEndDate": "2022-06-22", "installMentType": "Daily", "installments": 100, "installmentAmount": 1000.0, "custFullName": "Rahul Patil", "totalCollection": 70000.0, "loanStatus": "Closed", "remark": "", "disburseAmt": 84500.0, "paymentDate": "2022-06-02", "paymentMode": "", "loanCollections": [{ "loanAccNo": null, "payment": 10000.0, "paymentMethod": "Daily", "paymentDate": "2022-06-03", "paymentId": 9 }, { "loanAccNo": null, "payment": 10000.0, "paymentMethod": "Daily", "paymentDate": "2022-06-03", "paymentId": 10 }, { "loanAccNo": null, "payment": 10000.0, "paymentMethod": "Daily", "paymentDate": "2022-06-03", "paymentId": 11 }, { "loanAccNo": null, "payment": 10000.0, "paymentMethod": "Daily", "paymentDate": "2022-06-03", "paymentId": 12 }, { "loanAccNo": null, "payment": 10000.0, "paymentMethod": "Daily", "paymentDate": "2022-06-04", "paymentId": 13 }, { "loanAccNo": null, "payment": 10000.0, "paymentMethod": "Daily", "paymentDate": "2022-06-04", "paymentId": 14 }, { "loanAccNo": null, "payment": 10000.0, "paymentMethod": "Daily", "paymentDate": "2022-06-04", "paymentId": 15 }] }
        // this.loanPaymetDetails = this.loanDetail.loanCollections;
    }
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
            this.toster.error("Please enter loan id")
        } else {
            this.loanservice.getLoanDetailByLoanId(loanId).subscribe(data => {
                this.loanDetail = data;
                if (this.loanDetail.loanStatus.toLowerCase() == "closed") {
                    this.toster.error("Loan already closed");
                }
                this.loanPaymetDetails = this.loanDetail.loanCollections;
            })
        }
    }

    addCustomerPayment(paymentDetail: any, content) {
        if (this.loanDetail.loanStatus.toLowerCase() == "closed") {
            return;
        }
        this.loanPaymentDetail = paymentDetail;
        this.loanPaymentDetail.loanAccNo = this.loanDetail.loanAccountNo;
        this.loanPaymentDetail.paymentMethod = "Daily";

        if (this.loanDetail.loanAccountNo == "" || this.loanDetail.loanAccountNo == undefined) {
            this.toster.error("Please enter loan id")
            return;
        }
        if (paymentDetail.payment == "" || paymentDetail.payment == undefined) {
            this.toster.error("Please enter payment")
            return;
        }
        if (paymentDetail.paymentDate == "" || paymentDetail.paymentDate == undefined) {
            this.toster.error("Please enter payment date")
            return;
        }

        let paymentDate = this.loanPaymetDetails?.find(e => e.paymentDate == paymentDetail.paymentDate);
        console.log(paymentDetail);
        console.log(paymentDate);

        if (paymentDate) {
            this.modalService.open(content);
        } else {
            this.addCustomePayment();
        }
    };

    closeModal() {
        this.modalService.hasOpenModals() && this.modalService.dismissAll();
    }

    addCustomePayment() {
        this.loanservice.addCustomerPaymet(this.loanPaymentDetail).subscribe(data => {
            if (this.loanPaymetDetails == null) {
                this.loanPaymetDetails = [];
            }
            this.loanPaymetDetails.push(this.loanPaymentDetail);
            this.toster.success("Added Successfully");
            this.checkDuplicate = false;
        })
    }


}