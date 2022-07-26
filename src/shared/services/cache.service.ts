import { Injectable } from '@angular/core';
import { User } from "../modals/user";

@Injectable({ providedIn: 'root' })
export class CacheService {
    user: User;
    constructor() {
        this.user = new User(this.get('user'));
    }

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    get(key) {
        let user: any = localStorage.getItem(key);
        return user ? JSON.parse(user) : null;
    }

    clean(key) {
        localStorage.removeItem(key);
    }
}