import { Component, OnInit } from '@angular/core';

import { FDAccount } from 'src/shared/modals/fdaccount';
import { AppConstants } from 'src/shared/modals/app-constants';
import { FDInterestDtl } from 'src/shared/modals/fdinterest-dtl';

import { ToastService, FDService, CustomerService } from 'src/shared';
@Component({
    templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {
    fdAccountDtls: FDAccount = new FDAccount(null);
    fdInterestHistory: Array<FDInterestDtl> = [];
    fileUrl: any;
    isLoader: boolean;
    constructor(private toster: ToastService, private fdService: FDService) {
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
            this.fdService.getFDDetailByFDId(fdId).subscribe(data => {
                this.fdAccountDtls = data;
                this.fdInterestHistory = this.fdAccountDtls.paidInterestHistory;
                this.fileUrl = AppConstants.API_ENDPOINT + "/FD/download/" + fdId;
                this.isLoader = false;
            })
        }
    }
}
