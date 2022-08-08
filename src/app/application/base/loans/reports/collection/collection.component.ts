import { Component, OnInit } from '@angular/core';

import { LoanCollectionSummary } from 'src/shared/modals/loan-collection-summary';
import { AppConstants } from 'src/shared/modals/app-constants';

import { LoanService, ToastService } from 'src/shared';

@Component({
    templateUrl: './collection.component.html',
})
export class CollectionComponent implements OnInit {
    loanCollections: Array<LoanCollectionSummary> = [];
    loanCollRepo: LoanCollectionSummary = new LoanCollectionSummary(null);
    totalCollection: number = 0;
    fileUrl: any;
    isLoader: boolean;
    constructor(private toster: ToastService, private loanservice: LoanService) {
        this.isLoader = false;

    }

    ngOnInit() {
    }

    getCollectionDetail(collectionDates: any) {
        this.totalCollection = 0;
        this.loanCollRepo = collectionDates;
        this.isLoader = true;
        this.loanservice.getLoanCollectionsByDate(this.loanCollRepo.fromDate, this.loanCollRepo.toDate).then((data: any) => {
            this.loanCollections = data;
            this.loanCollections.forEach(element => {
                this.totalCollection = this.totalCollection + (element.payment);
                this.fileUrl = AppConstants.API_ENDPOINT + "/Loan/download-loan-collection-repo/" + this.loanCollRepo.fromDate + "/" + this.loanCollRepo.toDate;
            });

            this.isLoader = false;
        }, errot => {
            this.isLoader = false;
        });
    }

    getDailyCollection() {
        this.totalCollection = 0;
        this.isLoader = true;
        this.loanservice.getTodayCollectionSummary().then((data: any) => {
            this.loanCollections = data;
            this.loanCollections.forEach(element => {
                this.totalCollection = this.totalCollection + (element.payment);
            });

            this.isLoader = false;
        }, errot => {
            this.isLoader = false;
        });
    }

}
