import { Component, OnInit } from '@angular/core';
import { LoanserviceService } from '../../Services/loanservice.service';
import { LoanCollectionSummary } from '../../Module/loan-collection-summary';
import { AppConstants } from '../../Module/app-constants';

@Component({
  templateUrl: './loan-collection-report.component.html',
})
export class LoanCollectionReportComponent implements OnInit {
  loanCollections: Array<LoanCollectionSummary> = [];
  loanCollRepo:LoanCollectionSummary=new LoanCollectionSummary();
  totalCollection:number=0;
  fileUrl;
  constructor(private loanservice: LoanserviceService) { }

  ngOnInit() {
  }

  getCollectionDetail(collectionDates){
  this.totalCollection=0;
  this.loanCollRepo=collectionDates;
     this.loanservice.getLoanCollectionsByDate(this.loanCollRepo.fromDate,this.loanCollRepo.toDate).subscribe(data => {
        this.loanCollections=data;
       this. loanCollections.forEach(element => {
        this.totalCollection = this.totalCollection + (element.payment );
        this.fileUrl= AppConstants.API_ENDPOINT+"/Loan/download-loan-collection-repo/"+this.loanCollRepo.fromDate+"/"+this.loanCollRepo.toDate;   
      });
           
      })
    
   }
   getDailyCollection(){
    this.totalCollection=0;
    this.loanservice.getTodayCollectionSummary().subscribe(data => {
      this.loanCollections=data;
      this. loanCollections.forEach(element => {
        this.totalCollection = this.totalCollection + (element.payment );
            });
     })
   }
   
  }


