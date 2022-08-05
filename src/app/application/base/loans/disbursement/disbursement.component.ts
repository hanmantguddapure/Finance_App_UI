import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-disbursement',
    templateUrl: './disbursement.component.html'
})
export class DisbursementComponent implements OnInit {
    active = 'top';
    constructor(public router: Router) { }

    ngOnInit(): void {
    }

    goTo(url) {
        console.log(url);

        this.router.navigate(url)
    }

}
