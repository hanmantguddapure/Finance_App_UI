import { Component, OnInit } from '@angular/core';
import { LoanserviceService } from '../../Services/loanservice.service';
import { LoanCollectionSummary } from 'src/shared/modals/loan-collection-summary';
import { AppConstants } from 'src/shared/modals/app-constants';
import { ToastService } from 'src/shared/services/toast.service';

@Component({
    templateUrl: './loan-collection-report.component.html',
})
export class LoanCollectionReportComponent implements OnInit {
    loanCollections: Array<LoanCollectionSummary> = [];
    loanCollRepo: LoanCollectionSummary = new LoanCollectionSummary(null);
    totalCollection: number = 0;
    fileUrl: any;
    constructor(private toster: ToastService, private loanservice: LoanserviceService) { }

    ngOnInit() {
    }

    getCollectionDetail(collectionDates: any) {
        this.totalCollection = 0;
        this.loanCollRepo = collectionDates;
        this.loanservice.getLoanCollectionsByDate(this.loanCollRepo.fromDate, this.loanCollRepo.toDate).subscribe(data => {
            this.loanCollections = data;
            this.loanCollections.forEach(element => {
                this.totalCollection = this.totalCollection + (element.payment);
                this.fileUrl = AppConstants.API_ENDPOINT + "/Loan/download-loan-collection-repo/" + this.loanCollRepo.fromDate + "/" + this.loanCollRepo.toDate;
            });
        })
    }

    getDailyCollection() {
        this.totalCollection = 0;
        this.loanservice.getTodayCollectionSummary().subscribe(data => {
            this.loanCollections = data;
            this.loanCollections.forEach(element => {
                this.totalCollection = this.totalCollection + (element.payment);
            });
        })
    }

}
