import { Component } from '@angular/core';
import { User } from 'src/shared/modals/user';
import { LoginServiceService } from '../../Services/login-service.service';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastService } from 'src/shared/services/toast.service';
import { CacheService } from 'src/shared/services/cache.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    user: User = new User(null);
    isValidUserName: boolean = false;
    showUserName: boolean = true;

    constructor(
        private toster: ToastService,
        private cache: CacheService,
        private loginService: LoginServiceService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
    }

    checkUserName() {
        if (this.user.userName != null && this.user.userName != "") {
            this.loginService.checkUserName(this.user.userName).subscribe(data => {
                this.user = data;
                if (this.user.token != null || this.user.token != undefined) {
                    this.isValidUserName = true;
                    this.showUserName = false;
                } else {
                    this.toster.error("User Is Not Valid");
                }
                console.log(this.isValidUserName);
            })
        } else {
            this.toster.error("Please Enter User Name");
        }
        // this.router.navigate(['dashboard']);
    }

    checkUserPassword(): void {
        this.loginService.checkUser(this.user).subscribe(data => {
            this.cache.user = data;
            this.cache.set('user', this.cache.user);
            this.router.navigate(['dashboard']);
        })
    };
}
