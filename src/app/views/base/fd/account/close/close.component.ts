import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ToastService } from 'src/shared/services/toast.service';
import { FDAccount } from 'src/shared/modals/fdaccount';
import { FDServiceService } from 'src/app/services/fdservice.service';

@Component({
    templateUrl: './close.component.html'
})

export class CloseComponent implements OnInit {
    fdAccountDtls: FDAccount = new FDAccount(null);
    constructor(private toster: ToastService, private fdService: FDServiceService, private modalService: NgbModal, private router: Router) { }

    ngOnInit() {
    }

    getAccountDetail(event: any) {
        let fdId = event.target.value;
        if (fdId == "") {
            this.toster.error("Please enter FD Account id")
        } else {
            this.fdService.getFDDetailByFDId(fdId).subscribe(data => {
                this.fdAccountDtls = data;
            })
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

        this.fdService.closeFD(this.fdAccountDtls).subscribe(data => {
            this.fdAccountDtls = data;
            this.toster.success("Successfully Closed");
        })
    }

};
