import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {
    active = 'top';
    constructor() { }

    ngOnInit(): void {
    }

}
