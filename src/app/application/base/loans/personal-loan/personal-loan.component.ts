import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';

import { PersonalLaonDetail } from 'src/shared/modals/payment-detail';
import { CustomerService, LoanService, ToastService } from 'src/shared';

@Component({
    selector: 'app-personal-loan',
    templateUrl: './personal-loan.component.html',
})
export class PersonalLoanComponent {
    allCustomerList: any;
    loanPaymetDetails: Array<PersonalLaonDetail> = [];
    loanDetail: any;
    personalLaonDetails: PersonalLaonDetail = new PersonalLaonDetail(null);
    isCollapsed: boolean = false;
    isValidate: boolean = false;
    checkDuplicate: boolean = false;
    installmentDate = new Date();
    collectionType = 'Daily';
    iconCollapse: string = 'icon-arrow-up';
    isLoader: boolean;

    constructor(
        private toster: ToastService,
        private modalService: NgbModal,
        private customerService: CustomerService,
        private loanservice: LoanService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.isLoader = false;
    }
    collapsed(event: any): void {
        // console.log(event);
    }

    expanded(event: any): void {
        // console.log(event);
    }
    ngOnInit() {
        this.isLoader = true;
        this.customerService.getCustomerAllDetail().then(
            (data: any) => {
                this.allCustomerList = data.response;

                this.isLoader = false;
            },
            (error) => {
                console.log(error);
                this.isLoader = false;
            }
        );
    }
    toggleCollapse(): void {
        this.isCollapsed = !this.isCollapsed;
        this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
    }
    /*  onCustomerChange(custId){
          console.log("test "+custId);
         this.loanservice.getLoanDetailByCustIdAndStatus(custId).then((data: any) => {
            this.customerLoanDetail=data;
            this.loanDetail=this.customerLoanDetail[0];
           
           })
      }*/

    getAccountDetail(event: any) {
        let loanId = event.target.value;
        if (loanId == '') {
            this.toster.message('Please enter loan id');
        } else {
            this.isLoader = true;
            this.loanservice.getPersonalLaonLoanId(loanId).then(
                (data: any) => {
                    this.loanDetail = data;
                    if (this.loanDetail.loanStatus.toLowerCase() == 'closed') {
                        this.toster.message('Loan already closed');
                    }
                    this.loanPaymetDetails = this.loanDetail.loanCollections;

                    this.isLoader = false;
                },
                (error) => {
                    console.log(error);
                    this.isLoader = false;
                }
            );
        }
    }

    addCustomerPayment(paymentDetail: any, content) {
        if (this.loanDetail.loanStatus.toLowerCase() == 'closed') {
            return;
        }
        this.personalLaonDetails = paymentDetail;
        this.personalLaonDetails.loanId = this.loanDetail.loanAccountNo;

        if (
            this.loanDetail.loanAccountNo == '' ||
            this.loanDetail.loanAccountNo == undefined
        ) {
            this.toster.message('Please enter loan id');
            return;
        }
        if (paymentDetail.payment == '' || paymentDetail.payment == undefined) {
            this.toster.message('Please enter payment');
            return;
        }
        if (
            paymentDetail.paymentDate == '' ||
            paymentDetail.paymentDate == undefined
        ) {
            this.toster.message('Please enter payment date');
            return;
        }

        // let paymentDate = this.loanPaymetDetails?.find(
        //     (e) => e.paymentDate == paymentDetail.paymentDate
        // );

        // if (paymentDate) {
        //     this.modalService.open(content);
        // } else {
        this.addPLoanInstallments();
        // }
    }

    closeModal() {
        this.modalService.hasOpenModals() && this.modalService.dismissAll();
    }

    newPersonalLaon() {
        this.isLoader = true;
        this.loanservice.newPersonalLaon(this.personalLaonDetails).then(
            (data: any) => {
                if (this.loanPaymetDetails == null) {
                    this.loanPaymetDetails = [];
                }
                this.loanPaymetDetails.push(this.personalLaonDetails);
                this.toster.message('Added Successfully');
                this.checkDuplicate = false;

                this.isLoader = false;
            },
            (error) => {
                console.log(error);
                this.isLoader = false;
            }
        );
    }

    addPLoanInstallments() {
        this.isLoader = true;
        this.loanservice.addPLoanInstallments(this.personalLaonDetails).then(
            (data: any) => {
                if (this.loanPaymetDetails == null) {
                    this.loanPaymetDetails = [];
                }
                this.loanPaymetDetails.push(this.personalLaonDetails);
                this.toster.message('Added Successfully');
                this.checkDuplicate = false;

                this.isLoader = false;
            },
            (error) => {
                console.log(error);
                this.isLoader = false;
            }
        );
    }
}
