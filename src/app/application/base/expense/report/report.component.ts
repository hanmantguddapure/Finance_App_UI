import { Component, OnInit } from '@angular/core';

import { Expense } from 'src/shared/modals/expense';

import { ToastService, ExpenseService } from 'src/shared';
@Component({
    templateUrl: './report.component.html'
})
export class ExpenseReportComponent implements OnInit {
    expenseslst: Array<Expense> = [];
    validationFlag: boolean = true;
    expense: Expense = new Expense(null);
    total: number | any;
    expenseTypesList: Array<Expense> = [];
    deleteLoader: any;
    isLoader: boolean;

    constructor(private toster: ToastService, private expenseService: ExpenseService) {
        this.isLoader = false;
    }

    ngOnInit() {
        this.isLoader = true;

        this.expenseService.getExpenseTypes().subscribe(data => {
            this.expenseTypesList = data;
            this.isLoader = false;
        })
    }

    onStatusChange(event: any) {
        let expenseType = event.target.value;

        this.isLoader = true;
        this.expenseService.setExpenseType(expenseType).subscribe(data => {
            this.calculateTotal(data)
            this.isLoader = false;
        });
    }

    getExpenseDtls(expenseDetails: any): void {
        this.validationFlag = true;
        this.expense = expenseDetails;
        this.checkValidation();
        if (this.validationFlag) {
            this.isLoader = true;
            this.expenseService.getExpenseBetween(expenseDetails.fromDate, expenseDetails.toDate).subscribe(data => {
                this.calculateTotal(data)
                this.isLoader = false;
            })
        }
    };

    delete(index, id) {
        if (this.deleteLoader) {
            return;
        }
        this.deleteLoader = true;
        this.expenseService.deleteExpenses(index).then(data => {
            this.deleteLoader = false;
            this.expenseslst.splice(index, 1);
        }, error => {
            this.deleteLoader = false;
        })
    }

    calculateTotal(data) {
        this.total = 0;
        this.expenseslst = data;
        this.expenseslst.forEach(element => {
            this.total = this.total + (element.amount);
        });
    }

    checkValidation() {
        if (this.expense.fromDate == undefined) {
            this.toster.error("Please Enter From Date ");
            this.validationFlag = false;
        }
        if (this.expense.toDate == undefined) {
            this.toster.error("Please Enter To Date");
            this.validationFlag = false;
        }
    }
}
