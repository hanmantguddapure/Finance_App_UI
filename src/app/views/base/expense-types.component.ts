import { Component, OnInit } from '@angular/core';
import { ExpenseServiceService } from '../../Services/expense-service.service';
import { Expense } from 'src/shared/modals/expense';
import { ToastService } from 'src/shared/services/toast.service';

@Component({

    templateUrl: './expense-types.component.html'

})
export class ExpenseTypesComponent implements OnInit {

    expenseTypesList: Array<Expense> = [];
    expense: Expense = new Expense(null);
    constructor(private toster: ToastService, private expenseService: ExpenseServiceService) { }

    ngOnInit() {
        this.expenseService.getExpenseTypes().subscribe(data => {
            this.expenseTypesList = data;
        })
    }

    addExpenseTypes(expenseName: any) {
        if (expenseName.expenseType != "") {
            this.expenseService.addExpenseType(expenseName).subscribe(data => {
                this.expense = data;
                this.expenseTypesList.push(this.expense);
                this.toster.error("Added Successfully")
            })
        };
    }
}
