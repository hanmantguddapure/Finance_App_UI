import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FDAccount } from '../../Module/fdaccount';
import { FDServiceService } from '../../Services/fdservice.service';

@Component({
    templateUrl: './fdaccount-close.component.html',
    providers: [NgbModalConfig, NgbModal]
})
export class FDAccountCloseComponent implements OnInit {
    fdAccountDtls: FDAccount = new FDAccount(null);
    constructor(private fdService: FDServiceService, private modalService: NgbModal, private router: Router) { }

    ngOnInit() {
    }

    getAccountDetail(event: any) {
        let fdId = event.target.value;
        if (fdId == "") {
            alert("Please enter FD Account id")
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
            alert("Successfully Closed");
        })
    }

};
