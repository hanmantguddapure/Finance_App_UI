import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loandetail } from 'src/shared/modals/loandetail';
import { AppConstants } from 'src/shared/modals/app-constants';
import { Observable } from 'rxjs';
import { PaymentDetail } from 'src/shared/modals/payment-detail';
import { LoanRepo } from 'src/shared/modals/loan-repo';
import { Dashboard } from 'src/shared/modals/dashboard';
import { PendingLoanPayments } from 'src/shared/modals/pending-loan-payments';
import { LoanCollectionSummary } from 'src/shared/modals/loan-collection-summary';
import { LoanPenalty } from 'src/shared/modals/loan-penalty';
import { FirmLoan } from 'src/shared/modals/firm-loan';
import { ShortTermLoan } from 'src/shared/modals/short-term-loan';

@Injectable({
    providedIn: 'root'
})
export class LoanserviceService {

    constructor(private http: HttpClient) { }

    public saveLoanDetail(loandetail: Loandetail) {
        return this.http.post<Loandetail>(AppConstants.API_ENDPOINT + '/Loan/new', loandetail);
    }
    public getLoanDetailByLoanId(loanId: any) {
        return this.http.get<Loandetail>(AppConstants.API_ENDPOINT + '/Loan/find/' + loanId);
    }
    public getLoanDetailByCustIdAndStatus(custId: any) {
        return this.http.get<Loandetail[]>(AppConstants.API_ENDPOINT + '/Loan/find/' + custId + '/Opened');
    }
    public getLoanDetailByStatus(loanStatus: any) {
        return this.http.get<LoanRepo[]>(AppConstants.API_ENDPOINT + '/Loan/find-all/' + loanStatus);
    }
    public getLoanDetailByCustId(custId: any) {
        return this.http.get<LoanRepo[]>(AppConstants.API_ENDPOINT + '/Loan/find-all-accounts/' + custId);
    }
    public closeLoanAccount(loandetail: Loandetail) {
        return this.http.post<Loandetail>(AppConstants.API_ENDPOINT + '/Loan/close', loandetail);
    }
    public makeLoanPayment(loandetail: Loandetail) {
        return this.http.post<Loandetail>(AppConstants.API_ENDPOINT + '/Loan/disburse', loandetail);
    }
    public getDisburseLoansByStatus(loanStatus: any) {
        return this.http.get<LoanRepo[]>(AppConstants.API_ENDPOINT + '/Loan/find-disbursement/' + loanStatus);
    }

    public getPendingLoanPayments() {
        return this.http.get<Loandetail[]>(AppConstants.API_ENDPOINT + '/Loan/find-pending-disbursements');
    }
    public addCustomerPaymet(payment: PaymentDetail) {
        return this.http.post<PaymentDetail>(AppConstants.API_ENDPOINT + '/Loan/add-emi', payment);
    }
    public getLoanCollectionsByDate(fromDate: string, toDate: string) {
        return this.http.get<LoanCollectionSummary[]>(AppConstants.API_ENDPOINT + '/Loan/get-emi/' + fromDate + "/" + toDate);
    }
    public getTodayCollectionSummary() {
        return this.http.get<LoanCollectionSummary[]>(AppConstants.API_ENDPOINT + '/Loan/get-daily-paid-emi');
    }
    public getLoanPenltyByLoanId(loanAccountNo: any) {
        return this.http.get<LoanPenalty[]>(AppConstants.API_ENDPOINT + '/Loan/get-penalty/' + loanAccountNo);
    }
    public getAllLoanPenaltiesByLoanStatus(loanStatus: any) {
        return this.http.get<LoanPenalty[]>(AppConstants.API_ENDPOINT + '/Loan/get-all-penalty/' + loanStatus);
    }
    public addLoanPenlty(loanPenlty: LoanPenalty) {
        return this.http.post<LoanPenalty>(AppConstants.API_ENDPOINT + '/Loan/add-penalty', loanPenlty);
    }
    public createNewFirmLoan(firmLoan: FirmLoan) {
        return this.http.post<FirmLoan>(AppConstants.API_ENDPOINT + '/Firm/new', firmLoan);
    }
    public getFirmLoanById(firmLoanId: any) {
        return this.http.get<FirmLoan>(AppConstants.API_ENDPOINT + '/Firm/find/' + firmLoanId);
    }
    public closeFirmLoan(firmLoan: FirmLoan) {
        return this.http.post<FirmLoan>(AppConstants.API_ENDPOINT + '/Firm/close', firmLoan);
    }
    public getAllFirmLoan(status: any) {
        return this.http.get<FirmLoan[]>(AppConstants.API_ENDPOINT + '/Firm/find-all/' + status);
    }
    public createNewShortTermLoan(ShortTermLoan: ShortTermLoan) {
        return this.http.post<ShortTermLoan>(AppConstants.API_ENDPOINT + '/Firm/short-term-loan/new', ShortTermLoan);
    }
    public getShortTermLoanById(shortTermLoanId: any) {
        return this.http.get<ShortTermLoan>(AppConstants.API_ENDPOINT + '/Firm/short-term-loan/find/' + shortTermLoanId);
    }
    public closeShortTermLoan(shortTermLoan: ShortTermLoan) {
        return this.http.post<ShortTermLoan>(AppConstants.API_ENDPOINT + '/Firm/short-term-loan/close', shortTermLoan);
    }
    public getAllShortTermLoan(status: any) {
        return this.http.get<ShortTermLoan[]>(AppConstants.API_ENDPOINT + '/Firm/short-term-loan/find-all/' + status);
    }
    public checkDuplicatePayment(loanId: any, paymentDate: any) {
        return this.http.get<boolean>(AppConstants.API_ENDPOINT + '/Loan/check-duplicate-payment/' + loanId + "/" + paymentDate);
    }
}
