import { Component, OnInit } from '@angular/core';

import { Expense } from 'src/shared/modals/expense';

import { ToastService, ExpenseService } from 'src/shared';
@Component({
    templateUrl: './report.component.html'
})
export class ExpenseReportComponent implements OnInit {
    expenseslst: Array<any> = [];
    validationFlag: boolean = true;
    expense: Expense = new Expense(null);
    total: number | any;
    expenseTypesList: Array<Expense> = [];
    deleteLoader: any;
    isLoader: boolean;
    expenseType: any;

    constructor(private toster: ToastService, private expenseService: ExpenseService) {
        this.isLoader = false;
    }

    ngOnInit() {
        this.getInit();
    }

    getInit() {

        this.isLoader = true;

        this.expenseService.getExpenseTypes().then((data: any) => {
            this.expenseTypesList = data;
            this.isLoader = false;
        }, error => {
                console.log(error);
            this.isLoader = false;
        });
    }

    onStatusChange(event: any) {
        this.expenseType = event?.target?.value ?? this.expenseType;

        this.isLoader = true;
        this.expenseService.setExpenseType(this.expenseType).then((data: any) => {
            this.calculateTotal(data)
            this.isLoader = false;
        }, error => {
                console.log(error);
            this.isLoader = false;
        });
    }

    getExpenseDtls(expenseDetails: any): void {
        this.validationFlag = true;
        this.expense = expenseDetails;
        this.checkValidation();
        if (this.validationFlag) {
            this.isLoader = true;
            this.expenseService.getExpenseBetween(expenseDetails.fromDate, expenseDetails.toDate).then((data: any) => {
                this.calculateTotal(data)
                this.isLoader = false;
            }, error => {
                console.log(error);
                this.isLoader = false;
            });
        }
    };

    delete(index, id) {
        if (this.isLoader) {
            return;
        }
        this.isLoader = true;
        this.expenseService.deleteExpenses(id).then(data => {
            this.onStatusChange(null);
        }, error => {
            console.log(error);
            this.onStatusChange(null);
        })
    }

    calculateTotal(data) {
        this.total = 0;
        console.log(data);

        this.expenseslst = data;
        this.expenseslst?.forEach(element => {
            this.total = this.total + (element.amount);
        });
    }

    checkValidation() {
        if (this.expense.fromDate == undefined) {
            this.toster.message("Please Enter From Date ");
            this.validationFlag = false;
        }
        if (this.expense.toDate == undefined) {
            this.toster.message("Please Enter To Date");
            this.validationFlag = false;
        }
    }
}
