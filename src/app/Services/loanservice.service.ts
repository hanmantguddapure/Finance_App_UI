import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loandetail } from '../Module/loandetail';
import { AppConstants } from '../Module/app-constants';
import { Observable } from 'rxjs';
import { PaymentDetail } from '../Module/payment-detail';
import { LoanRepo } from '../Module/loan-repo';
import { Dashboard } from '../Module/dashboard';
import { PendingLoanPayments } from '../Module/pending-loan-payments';
import { LoanCollectionSummary } from '../Module/loan-collection-summary';
import { LoanPenalty } from '../Module/loan-penalty';
import { FirmLoan } from '../Module/firm-loan';
import { ShortTermLoan } from '../Module/short-term-loan';

@Injectable({
  providedIn: 'root'
})
export class LoanserviceService {

  constructor(private http: HttpClient) { }

  public saveLoanDetail(loandetail:Loandetail){
    return this.http.post<Loandetail>(AppConstants.API_ENDPOINT+'/Loan/new',loandetail);
  }
  public getLoanDetailByLoanId(loanId){
    return this.http.get<Loandetail>(AppConstants.API_ENDPOINT+'/Loan/find/'+loanId);
  }
  public getLoanDetailByCustIdAndStatus(custId){
    return this.http.get<Loandetail[]>(AppConstants.API_ENDPOINT+'/Loan/find/'+custId+'/Opened');
  }
  public getLoanDetailByStatus(loanStatus){
    return this.http.get<LoanRepo[]>(AppConstants.API_ENDPOINT+'/Loan/find-all/'+loanStatus);
  }
  public getLoanDetailByCustId(custId){
    return this.http.get<LoanRepo[]>(AppConstants.API_ENDPOINT+'/Loan/find-all-accounts/'+custId);
  }
  public closeLoanAccount(loandetail:Loandetail){
    return this.http.post<Loandetail>(AppConstants.API_ENDPOINT+'/Loan/close',loandetail);
  }
  public makeLoanPayment(loandetail:Loandetail){
    return this.http.post<Loandetail>(AppConstants.API_ENDPOINT+'/Loan/disburse',loandetail);
  }
  public getDisburseLoansByStatus(loanStatus){
    return this.http.get<LoanRepo[]>(AppConstants.API_ENDPOINT+'/Loan/find-disbursement/'+loanStatus);
  }
 
  public getPendingLoanPayments(){
    return this.http.get<Loandetail[]>(AppConstants.API_ENDPOINT+'/Loan/find-pending-disbursements');
  }
  public addCustomerPaymet(payment:PaymentDetail){
    return this.http.post<PaymentDetail>(AppConstants.API_ENDPOINT+'/Loan/add-emi',payment);
  }
  public getLoanCollectionsByDate(fromDate:string,toDate:string){
    return this.http.get<LoanCollectionSummary[]>(AppConstants.API_ENDPOINT+'/Loan/get-emi/'+fromDate+"/"+toDate);
  }
  public getTodayCollectionSummary(){
    return this.http.get<LoanCollectionSummary[]>(AppConstants.API_ENDPOINT+'/Loan/get-daily-paid-emi');
  }
  public getLoanPenltyByLoanId(loanAccountNo){
    return this.http.get<LoanPenalty[]>(AppConstants.API_ENDPOINT+'/Loan/get-penalty/'+loanAccountNo);
  }
  public getAllLoanPenaltiesByLoanStatus(loanStatus){
    return this.http.get<LoanPenalty[]>(AppConstants.API_ENDPOINT+'/Loan/get-all-penalty/'+loanStatus);
  }
  public addLoanPenlty(loanPenlty:LoanPenalty){
    return this.http.post<LoanPenalty>(AppConstants.API_ENDPOINT+'/Loan/add-penalty',loanPenlty);
  }
  public createNewFirmLoan(firmLoan:FirmLoan){
    return this.http.post<FirmLoan>(AppConstants.API_ENDPOINT+'/Firm/new',firmLoan);
  }
  public getFirmLoanById(firmLoanId){
    return this.http.get<FirmLoan>(AppConstants.API_ENDPOINT+'/Firm/find/'+firmLoanId);
  }
  public closeFirmLoan(firmLoan:FirmLoan){
    return this.http.post<FirmLoan>(AppConstants.API_ENDPOINT+'/Firm/close',firmLoan);
  }
  public getAllFirmLoan(status){
    return this.http.get<FirmLoan[]>(AppConstants.API_ENDPOINT+'/Firm/find-all/'+status);
  }
  public createNewShortTermLoan(ShortTermLoan:ShortTermLoan){
    return this.http.post<ShortTermLoan>(AppConstants.API_ENDPOINT+'/Firm/short-term-loan/new',ShortTermLoan);
  }
  public getShortTermLoanById(shortTermLoanId){
    return this.http.get<ShortTermLoan>(AppConstants.API_ENDPOINT+'/Firm/short-term-loan/find/'+shortTermLoanId);
  }
  public closeShortTermLoan(shortTermLoan:ShortTermLoan){
    return this.http.post<ShortTermLoan>(AppConstants.API_ENDPOINT+'/Firm/short-term-loan/close',shortTermLoan);
  }
  public getAllShortTermLoan(status){
    return this.http.get<ShortTermLoan[]>(AppConstants.API_ENDPOINT+'/Firm/short-term-loan/find-all/'+status);
  }
  public checkDuplicatePayment(loanId,paymentDate){
    return this.http.get<boolean>(AppConstants.API_ENDPOINT+'/Loan/check-duplicate-payment/'+loanId+"/"+paymentDate);
  }
}
