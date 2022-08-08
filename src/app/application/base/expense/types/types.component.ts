import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Expense } from 'src/shared/modals/expense';

import { ToastService, ExpenseService } from 'src/shared';
@Component({
    templateUrl: './types.component.html'
})
export class ExpenseTypesComponent implements OnInit {
    ExpenseGroup: FormGroup;
    UpdateExpenseGroup: FormGroup;

    expenseTypesList: Array<Expense> = [];

    expense: Expense = new Expense(null);
    editableExpenseType: any;
    isLoader: boolean;

    constructor(private toster: ToastService,
        private modalService: NgbModal,
        private fb: FormBuilder,
        private expenseService: ExpenseService) {
        this.createForm();

        this.editableExpenseType = '';
        this.isLoader = false;
    }

    createForm() {
        this.ExpenseGroup = this.fb.group({
            expenseType: ['']
        });

        this.UpdateExpenseGroup = this.fb.group({
            expenseTypeId: [''],
            expenseType: ['', [this.ValidateUrl.bind(this)]]
        });
    }

    intiateEdit(content, expense) {
        this.UpdateExpenseGroup.patchValue(expense);
        this.editableExpenseType = expense?.expenseType;
        this.modalService.open(content, { size: 'md' });
    }

    ngOnInit() {
        this.isLoader = true;

        this.expenseService.getExpenseTypes().then((data: any) => {
            this.expenseTypesList = data;
            this.isLoader = false;
        }, errot => {
            this.isLoader = false;
        });
    }

    addExpenseTypes() {
        let data = this.ExpenseGroup.getRawValue();

        if (!data.expenseType) {
            this.toster.error("Please add Expense Type");
            return;
        }
        this.isLoader = true;
        this.expenseService.addExpenseType(data).then((data: any) => {
            this.expense = data;
            this.expenseTypesList.push(this.expense);
            this.toster.success("Added Successfully");
            this.isLoader = false;
        });
    }

    updateData() {
        this.UpdateExpenseGroup.markAllAsTouched();

        if (!this.UpdateExpenseGroup.valid) {
            return;
        }

        let data = this.UpdateExpenseGroup.getRawValue();

        this.expenseService.updateExpenseType(data).then((resp: any) => {
            this.close();
            this.toster.success("Updated Successfully");
        });

    }

    close() {
        this.editableExpenseType = '';
        this.UpdateExpenseGroup.reset();
        this.modalService.dismissAll();
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

    ValidateUrl(control: AbstractControl) {
        let value = control.value;
        if (!value) {
            return { required: true };
        } else if (this.editableExpenseType && value == this.editableExpenseType) {
            return { similar: true };
        }
        return null;
    }
}
