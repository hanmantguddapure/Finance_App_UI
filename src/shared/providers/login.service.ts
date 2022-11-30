import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from 'src/shared/modals/user';
import { AppConstants } from 'src/shared/modals/app-constants';
import { CacheService } from 'src/shared/services/cache.service';
import { ApiService } from '../services/api.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(
        private http: HttpClient,
        private cache: CacheService,
        private apiService: ApiService
    ) { }

    public checkUserName(username: String) {

        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/authontication/check-username/' + username).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public checkUser(userCredential: User) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.postAPI('/authontication/check-password', userCredential).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }
}
