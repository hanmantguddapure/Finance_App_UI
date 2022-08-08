import { Component, OnInit } from '@angular/core';

import { Expense } from 'src/shared/modals/expense';

import { ToastService, ExpenseService } from 'src/shared';

@Component({
    templateUrl: './detail.component.html'
})

export class ExpenseDetailComponent implements OnInit {
    expenseTypesList: Array<Expense> = [];
    expenseslst: Array<Expense> = [];

    validationFlag: boolean = true;
    expense: Expense = new Expense(null);
    expenseName: string | any;
    total: number = 0;
    isLoader: boolean;

    constructor(private toster: ToastService, private expenseService: ExpenseService) {
        this.isLoader = false;
    }

    ngOnInit() {
        this.isLoader = true;
        this.expenseService.getExpenseTypes().then((data: any) => {
            this.isLoader = false;
            this.expenseTypesList = data;
        }, errot => {
            this.isLoader = false;
        });
    }

    selectchange(args: any) {
        this.expenseName = args.target.options[args.target.selectedIndex].text;
    }

    getExpensess(event: any) {
        let selectedDate = event.target.value;
        this.total = 0;
        this.isLoader = true;
        this.expenseService.getExpenseByDate(selectedDate).then((data: any) => {
            this.expenseslst = data;
            this.expenseslst.forEach(element => {
                this.total = this.total + (element.amount);
            });
            this.isLoader = false;
        }, errot => {
            this.isLoader = false;
        });
    }

    addExpenseDtls(expenseDetails: any): void {
        this.validationFlag = true;
        this.expense = expenseDetails;
        this.expense.expenseType = this.expenseName;
        this.checkValidation();
        if (this.validationFlag) {
            this.isLoader = true;
            this.expenseService.addExpenseDtls(this.expense).then((data: any) => {
                if (this.expenseslst == null) {
                    this.expenseslst = [];
                }
                this.expenseslst.push(data);
                this.toster.success("Successfully Added");
                this.isLoader = false;
            })
        }
    };

    checkValidation() {
        if (this.expense.expenseTypeId == undefined) {
            this.toster.error("Please Select Expense Type");
            this.validationFlag = false;
        }
        if (this.expense.amount == undefined) {
            this.toster.error("Please Enter Amount");
            this.validationFlag = false;
        }
        if (this.expense.fromDate == undefined) {
            this.toster.error("Please Enter From Date ");
            this.validationFlag = false;
        }
    }
}
