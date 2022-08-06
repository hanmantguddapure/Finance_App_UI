import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from 'src/shared/modals/user';
import { AppConstants } from 'src/shared/modals/app-constants';
import { CacheService } from 'src/shared/services/cache.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(
        private http: HttpClient,
        private cache: CacheService
    ) { }

    public checkUserName(username: String): Observable<User> {
        return this.http.get<User>(AppConstants.API_ENDPOINT + '/authontication/check-username/' + username);
    }

    public checkUser(userCredential: User) {
        return this.http.post<User>(AppConstants.API_ENDPOINT + '/authontication/check-password', userCredential);
    }
}
