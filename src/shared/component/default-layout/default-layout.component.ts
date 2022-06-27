import { Component } from '@angular/core';

import { navItems } from '../_nav';
import { ApiService } from "src/shared/services/api.service";
import { CacheService } from 'src/shared/services/cache.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {

    loader: boolean;
    navItems = navItems;
    perfectScrollbarConfig

    constructor(
        public apiService: ApiService,
        private cache: CacheService,
        private router: Router) {

        this.loader = false;
        if (!apiService.isAuthenticated()) {
            this.router.navigate(['login']);
        } else {
            this.loader = true;

            this.perfectScrollbarConfig = {
                suppressScrollX: true
            };
        }
    }
}
