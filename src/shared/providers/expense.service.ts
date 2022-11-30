import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConstants } from 'src/shared/modals/app-constants';
import { Expense } from 'src/shared/modals/expense';
import { ApiService } from 'src/shared/services/api.service';

@Injectable({
    providedIn: 'root'
})
export class ExpenseService {

    constructor(
        private http: HttpClient,
        private apiService: ApiService
    ) { }

    public getExpenseTypes() {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/expense/get-expense-types').then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    addExpenseType(expenseName: Expense) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.postAPI('/expense/add-expense-type', expenseName).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    addExpenseDtls(expenseDtls: Expense) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.postAPI('/expense/add-details', expenseDtls).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    getExpenseDtlsByDate(expenseDtls: Expense) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.postAPI('/expense/get-expense-detail', expenseDtls).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    deleteExpenses(id) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.deleteAPI('/expense/delete-expenses' + '/' + id, null).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    updateExpenseType(data) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.putAPI('/expense/rename-expense-type' + '/' + data.expenseTypeId + '/' + data.expenseType, null, null).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public setExpenseType(expenseType: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/expense/expense-type/' + expenseType).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public getExpenseByDate(fromDate: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/expense/get-expenses/' + fromDate).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public getExpenseBetween(fromDate: any, toDate: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/expense/get-expense-between/' + fromDate + "/" + toDate).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }
}
