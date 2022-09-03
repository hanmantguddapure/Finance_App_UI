import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoanPenalty } from 'src/shared/modals/loan-penalty';

import { LoanService, ToastService } from 'src/shared';

@Component({
    templateUrl: './penlty.component.html',
})
export class LoanPenltyComponent {
    loanPenalties: Array<LoanPenalty> = [];
    loanPenlty: LoanPenalty = new LoanPenalty(null);
    isValidate: boolean = true;
    isLoader: boolean;
    constructor(private toster: ToastService, private loanservice: LoanService, private router: Router, private route: ActivatedRoute) {
        this.isLoader = false;
    }

    getPenaltyDetail(event: any) {
        let loanId = event.target.value;
        if (loanId == "") {
            this.toster.error("Please enter loan id")
        } else {
            this.isLoader = true;
            this.loanservice.getLoanPenltyByLoanId(loanId).then((data: any) => {
                this.loanPenalties = data;

                this.isLoader = false;
            }, error => {
                console.log(error);
                this.isLoader = false;
            });
        }
    }

    addPenalty(penaltyDtls: any) {
        this.loanPenlty = penaltyDtls;

        if (this.loanPenlty.loanAccountId == undefined) {
            this.toster.error("Please enter loan id")
            this.isValidate = false;
        }
        if (this.loanPenlty.penaltyAmt == undefined) {
            this.toster.error("Please enter penalty")
            this.isValidate = false;
        }
        if (this.loanPenlty.remark == "" || this.loanPenlty.remark == undefined) {
            this.toster.error("Please enter remark")
            this.isValidate = false;
        }
        if (this.isValidate) {
            this.isLoader = true;
            this.loanservice.addLoanPenlty(this.loanPenlty).then((data: any) => {
                if (this.loanPenalties == null) {
                    this.loanPenalties = [];
                }
                this.loanPenalties.push(this.loanPenlty);
                this.toster.success("Added Successfully");

                this.isLoader = false;
            }, error => {
                console.log(error);
                this.isLoader = false;
            });
        }

    };



}
