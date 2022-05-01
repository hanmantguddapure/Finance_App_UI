import { Component, OnInit } from '@angular/core';
import { FDAccount } from '../../Module/fdaccount';
import { FDServiceService } from '../../Services/fdservice.service';
import { FDInterestDtl } from '../../Module/fdinterest-dtl';

@Component({
    templateUrl: './fdpay-interest-amt.component.html',
})
export class FDPayInterestAmtComponent implements OnInit {
    fdDtls: FDAccount = new FDAccount(null);
    fdInterest: FDInterestDtl = new FDInterestDtl(null);
    fdInterestHistory: Array<FDInterestDtl> = [];
    constructor(private fdService: FDServiceService) { }
    ngOnInit() {
    }

    getFDDetailByFDId(event: any) {
        let fdId = event.target.value;
        if (fdId == "") {
            alert("Please enter FD Account id")
        } else {
            this.fdService.getFDDetailByFDId(fdId).subscribe(data => {
                this.fdDtls = data;
                this.fdInterest.toDate = this.fdDtls.interestPayTo;
                this.fdInterest.fromDate = this.fdDtls.interstPayFrom;
                this.fdInterest.interestAmt = this.fdDtls.pendingInterestAmt;
                this.fdInterestHistory = this.fdDtls.paidInterestHistory;
            })
        }
    }

    payInterestAmt(fdInterestDetail: any) {
        // this.fdInterest=fdInterestDetail;
        console.log(JSON.stringify(this.fdInterest));
        this.fdService.payInterestAmt(this.fdInterest).subscribe(data => {
            if (this.fdInterestHistory == null) {
                this.fdInterestHistory = [];
            }
            this.fdInterestHistory.push(data);
            alert("Payment Done Successfully");
        })

    }
}
