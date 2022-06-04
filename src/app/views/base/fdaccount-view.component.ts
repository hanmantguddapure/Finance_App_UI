import { Component, OnInit } from '@angular/core';
import { FDAccount } from '../../Module/fdaccount';
import { FDServiceService } from '../../Services/fdservice.service';
import { AppConstants } from '../../Module/app-constants';
import { FDInterestDtl } from '../../Module/fdinterest-dtl';
import { ToastService } from 'src/app/Services/toast.service';

@Component({

    templateUrl: './fdaccount-view.component.html',

})
export class FDAccountViewComponent implements OnInit {
    fdAccountDtls: FDAccount = new FDAccount(null);
    fdInterestHistory: Array<FDInterestDtl> = [];
    fileUrl: any;
    constructor(private toster: ToastService, private fdService: FDServiceService) { }

    ngOnInit() {
    }

    getAccountDetail(event: any) {
        let fdId = event.target.value;
        if (fdId == "") {
            this.toster.error("Please enter FD Account id")
        } else {
            this.fdService.getFDDetailByFDId(fdId).subscribe(data => {
                this.fdAccountDtls = data;
                this.fdInterestHistory = this.fdAccountDtls.paidInterestHistory;
                this.fileUrl = AppConstants.API_ENDPOINT + "/FD/download/" + fdId;
            })
        }

    }

}
