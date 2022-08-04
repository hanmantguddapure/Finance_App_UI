import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CacheService } from 'src/shared/services/cache.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() drawer;

    constructor(
        private router: Router,
        public cache: CacheService) { }

    ngOnInit(): void {
    }

    logout() {
        this.cache.clean('user');
        this.router.navigate(['login']);
    }
}
