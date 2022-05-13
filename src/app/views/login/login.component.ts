import { Component } from '@angular/core';
import { UserCredentials } from '../../Module/user-credentials';
import { LoginServiceService } from '../../Services/login-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    usercredential: UserCredentials = new UserCredentials(null);
    isValidUserName: boolean = false;
    showUserName: boolean = true;
    constructor(private loginService: LoginServiceService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
    }
    checkUserName() {
        if (this.usercredential.userName != null && this.usercredential.userName != "") {
            this.loginService.checkUserName(this.usercredential.userName).subscribe(data => {
                this.usercredential = data;
                if (this.usercredential.token != null || this.usercredential.token != undefined) {
                    this.isValidUserName = true;
                    this.showUserName = false;
                } else {
                    alert("User Is Not Valid");
                }
                console.log(this.isValidUserName);
            })
        } else {
            alert("Please Enter User Name");
        }
        // this.router.navigate(['dashboard']);
    }
    checkUserPassword(): void {
        console.log("check password process");
        this.loginService.checkUser(this.usercredential).subscribe(data => {
            this.usercredential = data;
            localStorage.setItem('token', this.usercredential.jwtToken);
            localStorage.setItem('fullName', this.usercredential.fullName);
            this.router.navigate(['dashboard']);
        })
    };
}
