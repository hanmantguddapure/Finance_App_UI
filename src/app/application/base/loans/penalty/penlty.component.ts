import { Component, OnInit } from '@angular/core';
import { LoanPenalty } from 'src/shared/modals/loan-penalty';
import { LoanserviceService } from 'src/shared/providers/loanservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/shared/services/toast.service';

@Component({
    templateUrl: './penlty.component.html',
})
export class LoanPenltyComponent {
    loanPenalties: Array<LoanPenalty> = [];
    loanPenlty: LoanPenalty = new LoanPenalty(null);
    isValidate: boolean = true;
    constructor(private toster: ToastService, private loanservice: LoanserviceService, private router: Router, private route: ActivatedRoute) { }

    getPenaltyDetail(event: any) {
        let loanId = event.target.value;
        if (loanId == "") {
            this.toster.error("Please enter loan id")
        } else {
            this.loanservice.getLoanPenltyByLoanId(loanId).subscribe(data => {
                this.loanPenalties = data;

            })
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
            this.loanservice.addLoanPenlty(this.loanPenlty).subscribe(data => {
                if (this.loanPenalties == null) {
                    this.loanPenalties = [];
                }
                this.loanPenalties.push(this.loanPenlty);
                this.toster.success("Added Successfully");
            })
        }

    };



}
