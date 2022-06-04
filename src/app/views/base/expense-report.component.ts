import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/Services/toast.service';
import { Expense } from '../../Module/expense';
import { ExpenseServiceService } from '../../Services/expense-service.service';

@Component({

    templateUrl: './expense-report.component.html'

})
export class ExpenseReportComponent implements OnInit {
    expenseslst: Array<Expense> = [];
    validationFlag: boolean = true;
    expense: Expense = new Expense(null);
    total: number | any;
    expenseTypesList: Array<Expense> = [];
    constructor(private toster: ToastService, private expenseService: ExpenseServiceService) {

    }

    ngOnInit() {

        this.expenseService.getExpenseTypes().subscribe(data => {
            this.expenseTypesList = data;
        })
    }

    onStatusChange(event: any) {
        let expenseType = event.target.value;
        this.expenseService.setExpenseType(expenseType).subscribe(data => {
            this.calculateTotal(data)
        })
    }

    getExpenseDtls(expenseDetails: any): void {
        this.validationFlag = true;
        this.expense = expenseDetails;
        this.checkValidation();
        if (this.validationFlag) {
            this.expenseService.getExpenseBetween(expenseDetails.fromDate, expenseDetails.toDate).subscribe(data => {
                this.calculateTotal(data)
            })
        }
    };

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
