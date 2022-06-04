import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/Services/toast.service';
import { LoanPenalty } from '../../Module/loan-penalty';
import { LoanserviceService } from '../../Services/loanservice.service';

@Component({

    templateUrl: './loan-penalty-repo.component.html',

})
export class LoanPenaltyRepoComponent implements OnInit {
    loanPenalties: Array<LoanPenalty> = [];
    constructor(private toster: ToastService, private loanservice: LoanserviceService) { }

    ngOnInit() {
    }
    onStatusChange(event: any) {
        let loanStatus = event.target.value;
        this.loanservice.getAllLoanPenaltiesByLoanStatus(loanStatus).subscribe(data => {
            this.loanPenalties = data;
        })
    }
}
