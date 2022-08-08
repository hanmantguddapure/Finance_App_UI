import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, TemplateRef } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AppConstants } from '../modals/app-constants';

import { CacheService } from "./cache.service";

@Injectable({ providedIn: 'root' })
export class ApiService {
    constructor(public cache: CacheService, private http: HttpClient) {

    }

    isAuthenticated() {
        console.log(this.cache.user);

        if (!this.cache.user?.fullName) {
            this.logout();
            return false;
        }
        return true;
    }

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };


    // HttpClient API get() method => Fetch API
    getAPI(url, data = null) {
        return new Promise<void>((resolve, reject) => {
            this.http.get(AppConstants.API_ENDPOINT + url).subscribe({
                next: (res: any) => {
                    resolve(res);
                }, error: (err: any) => {
                    reject(err);
                },
                complete: () => {
                    console.log('complete');
                },
            });
        });
    }

    // HttpClient API post() method => Create API
    postAPI(url: string, data: any) {
        return new Promise<void>((resolve, reject) => {
            this.http.post(AppConstants.API_ENDPOINT + url, JSON.stringify(data), this.httpOptions).subscribe({
                next: (res: any) => {
                    resolve(res);
                },
                error: (err: any) => {
                    reject(err);
                },
                complete: () => {
                    console.log('complete');
                },
            });
        });
    }

    // // HttpClient API put() method => Update API
    putAPI(url, data, id = null) {
        return new Promise<void>((resolve, reject) => {
            this.http
                .put(AppConstants.API_ENDPOINT + url + (id ? ('/' + id) : ''), JSON.stringify(data), this.httpOptions).subscribe({
                    next: (res: any) => {
                        resolve(res);
                    },
                    error: (err: any) => {
                        reject(err);
                    },
                    complete: () => {
                        console.log('complete');
                    },
                });
        });
    }
    // HttpClient API delete() method => Delete API
    deleteAPI(url, id: any) {
        return new Promise<void>((resolve, reject) => {//     
            this.http
                .delete(AppConstants.API_ENDPOINT + url + '/' + id, this.httpOptions).subscribe({
                    next: (res: any) => {
                        resolve(res);
                    },
                    error: (err: any) => {
                        reject(err);
                    },
                    complete: () => {
                        console.log('complete');
                    },
                });
        })
    }

    // Error handling
    handleError(error: any): Observable<Response> {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.error(errorMessage);
        return throwError(() => {
            return errorMessage;
        });
    }

    logout() {
        this.cache.clean('user')
    }
}