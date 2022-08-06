import { Component, OnInit } from '@angular/core';

import { LoanRepo } from 'src/shared/modals/loan-repo';

import { ToastService, LoanService } from 'src/shared';

@Component({
    templateUrl: './loans.component.html'
})

export class LoansComponent implements OnInit {
    loanRepoDetails: Array<LoanRepo> = [];
    isLoader: boolean;

    constructor(private toster: ToastService, private loanservice: LoanService) {
        this.isLoader = false;
    }

    ngOnInit() {
        this.isLoader = true;
        this.loanservice.getDisburseLoansByStatus('Opened').subscribe(data => {
            this.loanRepoDetails = data;
            this.isLoader = false;
        })
    }
}
