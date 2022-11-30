import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html'
})
export class ReportsComponent implements OnInit {
    active = 'top';
    constructor(public router: Router) { }

    ngOnInit(): void {
    }

    goTo(url) {
        console.log(url);

        this.router.navigate(url)
    }

}
