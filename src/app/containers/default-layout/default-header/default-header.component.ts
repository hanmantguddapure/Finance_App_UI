import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { navItems } from 'src/app/_nav';

@Component({
    selector: 'app-default-header',
    templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {
    public navItems = navItems;
    public sidebarMinimized = true;
    public loggedUserName: any;

    @Input() sidebarId: string = "sidebar";

    public newMessages = new Array(4)
    public newTasks = new Array(5)
    public newNotifications = new Array(5)

    constructor(private router: Router, private classToggler: ClassToggleService) {
        super();
    }

    ngOnInit() {
        this.loggedUserName = '';
        this.loggedUserName = localStorage.getItem('fullName');
        console.log("check clogget user " + this.loggedUserName);
    }

    ngOnDestroy(): void {
    }

    logout() {
        console.log("remove its works");
        localStorage.removeItem("token");
        this.router.navigate(['login']);
    }
}
