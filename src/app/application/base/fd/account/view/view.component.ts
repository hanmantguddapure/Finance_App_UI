import { Component, OnInit } from '@angular/core';

import { FDAccount } from 'src/shared/modals/fdaccount';

import { FDServiceService } from 'src/shared/providers/fdservice.service';
import { AppConstants } from 'src/shared/modals/app-constants';
import { FDInterestDtl } from 'src/shared/modals/fdinterest-dtl';
import { ToastService } from 'src/shared/services/toast.service';

@Component({

    templateUrl: './view.component.html',

})
export class ViewComponent implements OnInit {
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
