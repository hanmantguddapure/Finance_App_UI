import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { navItems } from 'src/shared/component/_nav';
import { CacheService } from 'src/shared/services/cache.service';

@Component({
    selector: 'app-default-header',
    templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {
    public navItems = navItems;
    public sidebarMinimized = true;
    @Input() sidebarId: string = "sidebar";

    public newMessages = new Array(4)
    public newTasks = new Array(5)
    public newNotifications = new Array(5)

    constructor(
        private router: Router,
        private classToggler: ClassToggleService,
        public cache: CacheService) {
        super();
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
    }

    logout() {
        this.cache.clean('user');
        this.router.navigate(['login']);
    }
}
