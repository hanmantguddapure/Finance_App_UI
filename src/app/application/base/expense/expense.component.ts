import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-expense',
    templateUrl: './expense.component.html'
})
export class ExpenseComponent implements OnInit {
    active = 'top';
    constructor() { }

    ngOnInit(): void {
    }

}
