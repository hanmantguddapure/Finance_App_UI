import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Loandetail } from 'src/shared/modals/loandetail';
import { PaymentDetail } from 'src/shared/modals/payment-detail';
import { LoanPenalty } from 'src/shared/modals/loan-penalty';
import { FirmLoan } from 'src/shared/modals/firm-loan';
import { ShortTermLoan } from 'src/shared/modals/short-term-loan';
import { ApiService } from '../services/api.service';

@Injectable({
    providedIn: 'root'
})
export class LoanService {

    constructor(
        private http: HttpClient,
        private apiService: ApiService) { }

    public saveLoanDetail(loandetail: Loandetail) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.postAPI('/Loan/new', loandetail).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public getLoanDetailByLoanId(loanId: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/Loan/find/' + loanId).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public getLoanDetailByCustIdAndStatus(custId: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/Loan/find/' + custId + '/Opened').then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public getLoanDetailByStatus(loanStatus: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/Loan/find-all/' + loanStatus).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public getLoanDetailByCustId(custId: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/Loan/find-all-accounts/' + custId).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }
    public closeLoanAccount(loandetail: Loandetail) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.postAPI('/Loan/close', loandetail).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }
    public makeLoanPayment(loandetail: Loandetail) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.postAPI('/Loan/disburse', loandetail).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public getDisburseLoansByStatus(loanStatus: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/Loan/find-disbursement/' + loanStatus).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }


    public getPendingLoanPayments() {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/Loan/find-pending-disbursements').then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }
    public addCustomerPaymet(payment: PaymentDetail) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.postAPI('/Loan/add-emi', payment).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public getLoanCollectionsByDate(fromDate: string, toDate: string) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/Loan/get-emi/' + fromDate + "/" + toDate).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public getTodayCollectionSummary() {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/Loan/get-daily-paid-emi').then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public getLoanPenltyByLoanId(loanAccountNo: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/Loan/get-penalty/' + loanAccountNo).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public getAllLoanPenaltiesByLoanStatus(loanStatus: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/Loan/get-all-penalty/' + loanStatus).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }
    public addLoanPenlty(loanPenlty: LoanPenalty) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.postAPI('/Loan/add-penalty', loanPenlty).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }
    public createNewFirmLoan(firmLoan: FirmLoan) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.postAPI('/Firm/new', firmLoan).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public getFirmLoanById(firmLoanId: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/Firm/find/' + firmLoanId).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }
    public closeFirmLoan(firmLoan: FirmLoan) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.postAPI('/Firm/close', firmLoan).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public getAllFirmLoan(status: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/Firm/find-all/' + status).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }
    public createNewShortTermLoan(ShortTermLoan: ShortTermLoan) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.postAPI('/Firm/short-term-loan/new', ShortTermLoan).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public getShortTermLoanById(shortTermLoanId: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/Firm/short-term-loan/find/' + shortTermLoanId).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }
    public closeShortTermLoan(shortTermLoan: ShortTermLoan) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.postAPI('/Firm/short-term-loan/close', shortTermLoan).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public getAllShortTermLoan(status: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/Firm/short-term-loan/find-all/' + status).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public checkDuplicatePayment(loanId: any, paymentDate: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/Loan/check-duplicate-payment/' + loanId + "/" + paymentDate).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }
}
