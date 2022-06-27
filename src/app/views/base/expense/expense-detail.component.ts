import { Component, OnInit } from '@angular/core';
import { ExpenseServiceService } from 'src/app/services/expense-service.service';
import { Expense } from 'src/shared/modals/expense';
import { ToastService } from 'src/shared/services/toast.service';

@Component({
    templateUrl: './expense-detail.component.html'
})
export class ExpenseDetailComponent implements OnInit {
    expenseTypesList: Array<Expense> = [];
    expenseslst: Array<Expense> = [];
    validationFlag: boolean = true;
    expense: Expense = new Expense(null);
    expenseName: string | any;
    total: number = 0;
    constructor(private toster: ToastService, private expenseService: ExpenseServiceService) { }
    ngOnInit() {
        this.expenseService.getExpenseTypes().subscribe(data => {
            this.expenseTypesList = data;
        })
    }

    selectchange(args: any) {
        this.expenseName = args.target.options[args.target.selectedIndex].text;
    }

    getExpensess(event: any) {
        let selectedDate = event.target.value;
        this.total = 0;
        this.expenseService.getExpenseByDate(selectedDate).subscribe(data => {
            this.expenseslst = data;
            this.expenseslst.forEach(element => {
                this.total = this.total + (element.amount);
            });

        })
    }
    addExpenseDtls(expenseDetails: any): void {
        this.validationFlag = true;

        this.expense = expenseDetails;
        this.expense.expenseType = this.expenseName;
        this.checkValidation();
        if (this.validationFlag) {
            this.expenseService.addExpenseDtls(this.expense).subscribe(data => {
                if (this.expenseslst == null) {
                    this.expenseslst = [];
                }
                this.expenseslst.push(data);
                // this.total = this.total + parseInt(this.expense.amount);
                //this.total=(this.total)+(this.expense.amount);
                this.toster.success("Successfully Added");
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
