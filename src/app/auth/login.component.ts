import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/shared/modals/user';

import {
    LoginService,
    ToastService,
    CacheService
} from 'src/shared';

@Component({
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    user: User = new User(null);
    isValidUserName: boolean = false;
    showUserName: boolean = true;

    userLoader: boolean = false;
    passwordLoader: boolean = false;

    constructor(
        private toster: ToastService,
        private cache: CacheService,
        private loginService: LoginService,
        private router: Router) { }

    ngOnInit() {
    }

    checkUserName() {
        if (this.userLoader) {
            return;
        }
        if (!this.user.userName) {
            this.toster.error("Please Enter User Name");
            return;
        }
        this.userLoader = true;
        this.loginService.checkUserName(this.user.userName).then((data: any) => {
            this.user = data;
            if (this.user.token != null || this.user.token != undefined) {
                this.isValidUserName = true;
                this.showUserName = false;
            } else {
                this.toster.error("User Is Not Valid");
            }
            this.userLoader = false;
        }, error => {
            this.userLoader = false;
        });
    }

    checkUserPassword(): void {
        if (this.passwordLoader) {
            return;
        }
        this.passwordLoader = true;
        this.loginService.checkUser(this.user).then((data: any) => {
            this.cache.user = data;
            this.cache.set('user', this.cache.user);
            this.router.navigate(['/application/dashboard']);
            this.passwordLoader = false;
        }, error => {
            this.passwordLoader = false;
        });
    };
}
