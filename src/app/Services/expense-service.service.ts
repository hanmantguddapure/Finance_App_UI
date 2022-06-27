import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExpressionType } from '@angular/compiler';
import { AppConstants } from 'src/shared/modals/app-constants';
import { Expense } from 'src/shared/modals/expense';


@Injectable({
    providedIn: 'root'
})
export class ExpenseServiceService {

    constructor(private http: HttpClient) { }
    public getExpenseTypes() {
        return this.http.get<Expense[]>(AppConstants.API_ENDPOINT + '/expense/get-expense-types');
    }
    public addExpenseType(expenseName: Expense) {
        return this.http.post<Expense>(AppConstants.API_ENDPOINT + '/expense/add-expense-type', expenseName);
    }
    public addExpenseDtls(expenseDtls: Expense) {
        return this.http.post<Expense>(AppConstants.API_ENDPOINT + '/expense/add-details', expenseDtls);
    }
    public getExpenseDtlsByDate(expenseDtls: Expense) {
        return this.http.post<Expense[]>(AppConstants.API_ENDPOINT + '/expense/get-expense-detail', expenseDtls);
    }

    public setExpenseType(expenseType: any) {
        return this.http.get<Expense[]>(AppConstants.API_ENDPOINT + '/expense/expense-type/' + expenseType);
    }

    public getExpenseByDate(fromDate: any) {
        return this.http.get<Expense[]>(AppConstants.API_ENDPOINT + '/expense/get-expenses/' + fromDate);
    }

    public getExpenseBetween(fromDate: any, toDate: any) {
        return this.http.get<Expense[]>(AppConstants.API_ENDPOINT + '/expense/get-expense-between/' + fromDate + "/" + toDate);
    }
}
