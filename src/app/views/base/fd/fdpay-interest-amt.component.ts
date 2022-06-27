import { Component, OnInit } from '@angular/core';
import { FDAccount } from 'src/shared/modals/fdaccount';
import { FDServiceService } from 'src/app/services/fdservice.service';
import { FDInterestDtl } from 'src/shared/modals/fdinterest-dtl';
import { ToastService } from 'src/shared/services/toast.service';

@Component({
    templateUrl: './fdpay-interest-amt.component.html',
})
export class FDPayInterestAmtComponent implements OnInit {
    fdDtls: FDAccount;
    fdInterest: FDInterestDtl;
    fdInterestHistory: Array<FDInterestDtl>;
    constructor(private toster: ToastService, private fdService: FDServiceService) {
        this.fdDtls = new FDAccount(null);
        this.fdInterest = new FDInterestDtl(null);
        this.fdInterestHistory = [];
    }
    ngOnInit() {
    }

    getFDDetailByFDId(event: any) {
        let fdId = event.target.value;
        if (fdId == "") {
            this.toster.error("Please enter FD Account id")
        } else {
            this.fdService.getFDDetailByFDId(fdId).subscribe(data => {
                this.fdDtls = new FDAccount(data);
                if (this.fdDtls.isActive.toLowerCase() == "closed") {
                    this.toster.error("This FD already closed");
                }
                this.fdInterest.toDate = this.fdDtls.interestPayTo;
                this.fdInterest.fromDate = this.fdDtls.interstPayFrom;
                this.fdInterest.interestAmt = this.fdDtls.pendingInterestAmt;
                this.fdInterestHistory = this.fdDtls.paidInterestHistory;
            })
        }
    }

    payInterestAmt(fdInterestDetail: any) {
        // this.fdInterest=fdInterestDetail;
        if (this.fdDtls.isActive.toLowerCase() == "closed") {
            return;
        }
        this.fdService.payInterestAmt(this.fdInterest).subscribe(data => {
            if (this.fdInterestHistory == null) {
                this.fdInterestHistory = [];
            }
            this.fdInterestHistory.push(data);
            this.toster.success("Payment Done Successfully");
        })

    }
}
