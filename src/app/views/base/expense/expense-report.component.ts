import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/shared/services/toast.service';
import { Expense } from 'src/shared/modals/expense';
import { ExpenseServiceService } from 'src/app/services/expense-service.service';

@Component({

    templateUrl: './expense-report.component.html'

})
export class ExpenseReportComponent implements OnInit {
    expenseslst: Array<Expense> = [];
    validationFlag: boolean = true;
    expense: Expense = new Expense(null);
    total: number | any;
    expenseTypesList: Array<Expense> = [];
    deleteLoader: any;
    constructor(private toster: ToastService, private expenseService: ExpenseServiceService) {

    }

    ngOnInit() {

        this.expenseslst = [
            {
                expenseType: 'Ters', expenseTypeId: 1, amount: 0, fromDate: '', toDate: '', remark: ''
            },
            {
                expenseType: 'ters', expenseTypeId: 1, amount: 0, fromDate: '', toDate: '', remark: ''
            }
        ];
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
