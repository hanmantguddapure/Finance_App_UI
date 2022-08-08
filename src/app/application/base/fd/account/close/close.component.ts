import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FDAccount } from 'src/shared/modals/fdaccount';

import { ToastService, FDService, CustomerService } from 'src/shared';

@Component({
    templateUrl: './close.component.html'
})

export class CloseComponent implements OnInit {
    fdAccountDtls: FDAccount = new FDAccount(null);
    isLoader: boolean;
    constructor(private toster: ToastService, private fdService: FDService, private modalService: NgbModal, private router: Router) {
        this.isLoader = false;
    }

    ngOnInit() {
    }

    getAccountDetail(event: any) {
        let fdId = event.target.value;
        if (fdId == "") {
            this.toster.error("Please enter FD Account id")
        } else {
            this.isLoader = true;
            this.fdService.getFDDetailByFDId(fdId).then((data: any) => {
                this.isLoader = false;
                this.fdAccountDtls = data;
            }, errot => {
                this.isLoader = false;
            });
        }

    }

    calculateItersetAmt() {
        this.fdAccountDtls.interestAmt = (this.fdAccountDtls.amount / 100) * (this.fdAccountDtls.interest);
        console.log("test " + " " + this.fdAccountDtls.interest + " " + this.fdAccountDtls.interestAmt);
    }

    closeModal(isRedirection: boolean) {
        this.modalService.hasOpenModals() && this.modalService.dismissAll();
        if (isRedirection) {
            this.router.navigate(['base', 'fdpayinterest']);
        }
    }

    closeFD(content: any) {

        if (this.fdAccountDtls.pendingInterestAmt) {
            this.modalService.open(content);
            return;
        }

        this.isLoader = true;
        this.fdService.closeFD(this.fdAccountDtls).then((data: any) => {
            this.fdAccountDtls = data;
            this.toster.success("Successfully Closed");
            this.isLoader = false;
        }, errot => {
            this.isLoader = false;
        });
    }
}
