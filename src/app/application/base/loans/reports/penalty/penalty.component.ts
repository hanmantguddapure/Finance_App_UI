import { Component, OnInit } from '@angular/core';

import { LoanPenalty } from 'src/shared/modals/loan-penalty';

import { ToastService, LoanService } from 'src/shared';

@Component({

    templateUrl: './penalty.component.html',

})
export class PenaltyComponent implements OnInit {
    loanPenalties: Array<LoanPenalty> = [];
    isLoader: boolean;
    constructor(private toster: ToastService, private loanservice: LoanService) {
        this.isLoader = false;
    }

    ngOnInit() {
    }
    onStatusChange(event: any) {
        let loanStatus = event.target.value;
        this.isLoader = true;
        this.loanservice.getAllLoanPenaltiesByLoanStatus(loanStatus).subscribe(data => {
            this.loanPenalties = data;
            this.isLoader = false;
        })
    }
}
