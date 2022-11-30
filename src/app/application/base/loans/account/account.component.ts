import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {
    active = 'top';
    constructor(public router: Router) { }

    ngOnInit(): void {
    }

    goTo(url) {
        console.log(url);

        this.router.navigate(url)
    }

}
