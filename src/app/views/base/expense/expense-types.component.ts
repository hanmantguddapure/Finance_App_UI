import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ExpenseServiceService } from 'src/app/services/expense-service.service';
import { Expense } from 'src/shared/modals/expense';
import { ToastService } from 'src/shared/services/toast.service';

@Component({

    templateUrl: './expense-types.component.html'

})
export class ExpenseTypesComponent implements OnInit {
    ExpenseGroup: FormGroup;

    expenseTypesList: Array<Expense> = [];

    expense: Expense = new Expense(null);

    constructor(private toster: ToastService,
        private fb: FormBuilder,
        private expenseService: ExpenseServiceService) {
        this.createForm();
    }

    createForm() {
        this.ExpenseGroup = this.fb.group({
            expenseTypeId: [''],
            expenseType: ['']
        });
    }

    intiateEdit() {

    }

    ngOnInit() {
        this.expenseService.getExpenseTypes().subscribe(data => {
            this.expenseTypesList = data;
        })
    }

    addExpenseTypes() {
        let data = this.ExpenseGroup.getRawValue();

        if (!data.expenseType) {
            this.toster.error("Please add Expense Type");
            return;
        }
        this.expenseService.addExpenseType(data.expenseType).then((data: any) => {
            this.expense = data;
            this.expenseTypesList.push(this.expense);
            this.toster.success("Added Successfully");
        });
    }

    updateExpenseTypes() {
        let data = this.ExpenseGroup.getRawValue();

        if (!data.expenseType) {
            this.toster.error("Please add Expense Type");
            return;
        }
        this.expenseService.addExpenseType(data.expenseType).then((data: any) => {
            this.expense = data;
            this.expenseTypesList.push(this.expense);
            this.toster.success("Added Successfully");
        });
    }
}
