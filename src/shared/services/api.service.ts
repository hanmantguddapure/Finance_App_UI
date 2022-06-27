import { Injectable, TemplateRef } from '@angular/core';

import { CacheService } from "./cache.service";

@Injectable({ providedIn: 'root' })
export class ApiService {
    constructor(public cache: CacheService) {

    }

    isAuthenticated() {
        console.log(this.cache.user);

        if (!this.cache.user?.fullName) {
            this.logout();
            return false;
        }
        return true;
    }

    logout() {
        this.cache.clean('user')
    }
}