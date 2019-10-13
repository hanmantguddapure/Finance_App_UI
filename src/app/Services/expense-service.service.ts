import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExpressionType } from '@angular/compiler';
import { AppConstants } from '../Module/app-constants';
import { Expense } from '../Module/expense';


@Injectable({
  providedIn: 'root'
})
export class ExpenseServiceService {

  constructor(private http: HttpClient) { }
  public getExpenseTypes(){
    return this.http.get<Expense[]>(AppConstants.API_ENDPOINT+'/expense/get-expense-types');
  }
  public addExpenseType(expenseName:Expense){
    return this.http.post<Expense>(AppConstants.API_ENDPOINT+'/expense/add-expense-type',expenseName);
  }
  public addExpenseDtls(expenseDtls:Expense){
    return this.http.post<Expense>(AppConstants.API_ENDPOINT+'/expense/add-details',expenseDtls);
  }
  public getExpenseDtlsByDate(expenseDtls:Expense){
    return this.http.post<Expense[]>(AppConstants.API_ENDPOINT+'/expense/get-expense-detail',expenseDtls);
  }
 
  public getExpenseByDate(fromDate){
    return this.http.get<Expense[]>(AppConstants.API_ENDPOINT+'/expense/get-expenses/'+fromDate);
  }
  public getExpenseBetween(fromDate,toDate){
    return this.http.get<Expense[]>(AppConstants.API_ENDPOINT+'/expense/get-expense-between/'+fromDate+"/"+toDate);
  }
}
