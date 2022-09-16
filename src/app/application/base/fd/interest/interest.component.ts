import { Component, OnInit } from '@angular/core';

import { FDAccount } from 'src/shared/modals/fdaccount';
import { FDInterestDtl } from 'src/shared/modals/fdinterest-dtl';

import { ToastService, FDService, CustomerService } from 'src/shared';

@Component({
    templateUrl: './interest.component.html',
})
export class InterestComponent implements OnInit {
    fdDtls: FDAccount;
    fdInterest: FDInterestDtl;
    fdInterestHistory: Array<FDInterestDtl>;
    isLoader: boolean;
    constructor(private toster: ToastService, private fdService: FDService) {
        this.fdDtls = new FDAccount(null);
        this.fdInterest = new FDInterestDtl(null);
        this.fdInterestHistory = [];
        this.isLoader = false;
    }
    ngOnInit() {
    }

    getFDDetailByFDId(event: any) {
        let fdId = event.target.value;
        if (fdId == "") {
            this.toster.message("Please enter FD Account id")
        } else {
            this.isLoader = true;
            this.fdService.getFDDetailByFDId(fdId).then((data: any) => {
                this.fdDtls = new FDAccount(data);
                if (this.fdDtls.isActive.toLowerCase() == "closed") {
                    this.toster.message("This FD already closed");
                }
                this.fdInterest.toDate = this.fdDtls.interestPayTo;
                this.fdInterest.fromDate = this.fdDtls.interstPayFrom;
                this.fdInterest.interestAmt = this.fdDtls.pendingInterestAmt;
                this.fdInterestHistory = this.fdDtls.paidInterestHistory;
                this.isLoader = false;
            }, error => {
                console.log(error);
                this.isLoader = false;
            });
        }
    }

    payInterestAmt(fdInterestDetail: any) {
        this.fdInterest = fdInterestDetail;
        if (this.fdDtls.isActive.toLowerCase() == "closed") {
            return;
        }
        this.isLoader = true;
        this.fdService.payInterestAmt(this.fdInterest).then((data: any) => {
            console.log(data, Array.isArray(data));
            if (Array.isArray(data)) {
                console.log('>>>>');

                data.forEach(e => {
                    this.toster.message(e);
                })
            } else {
                if (this.fdInterestHistory == null) {
                    this.fdInterestHistory = [];
                }
                this.fdInterestHistory.push(data);
                this.toster.message("Payment Done Successfully");
            }
            this.isLoader = false;
        }, error => {
            console.log(error);
            this.isLoader = false;
        });
    }
}
