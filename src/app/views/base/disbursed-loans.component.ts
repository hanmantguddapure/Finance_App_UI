import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/shared/services/toast.service';
import { LoanRepo } from 'src/shared/modals/loan-repo';
import { LoanserviceService } from '../../Services/loanservice.service';

@Component({
    templateUrl: './disbursed-loans.component.html',

})
export class DisbursedLoansComponent implements OnInit {
    loanRepoDetails: Array<LoanRepo> = [];

    constructor(private toster: ToastService, private loanservice: LoanserviceService) { }

    ngOnInit() {
        this.loanservice.getDisburseLoansByStatus('Opened').subscribe(data => {

            this.loanRepoDetails = data;


        })
    }

}
