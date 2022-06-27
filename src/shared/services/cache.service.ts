import { Injectable } from '@angular/core';
import { User } from "../modals/user";

@Injectable({ providedIn: 'root' })
export class CacheService {
    user: User;
    constructor() {
        this.user = new User(this.get('user'));
    }

    set(key, value) {
        localStorage.setItem(key, value);
    }

    get(key) {
        return localStorage.getItem(key);
    }

    clean(key) {
        localStorage.removeItem(key);
    }
}