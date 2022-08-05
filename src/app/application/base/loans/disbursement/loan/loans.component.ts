import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/shared/services/toast.service';
import { LoanRepo } from 'src/shared/modals/loan-repo';
import { LoanserviceService } from 'src/shared/providers/loanservice.service';

@Component({
    templateUrl: './loans.component.html'
})

export class LoansComponent implements OnInit {
    loanRepoDetails: Array<LoanRepo> = [];

    constructor(private toster: ToastService, private loanservice: LoanserviceService) { }

    ngOnInit() {
        this.loanservice.getDisburseLoansByStatus('Opened').subscribe(data => {

            this.loanRepoDetails = data;


        })
    }

}
