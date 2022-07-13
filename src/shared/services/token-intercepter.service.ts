import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, finalize, switchMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

import { Router } from '@angular/router';

import { CacheService } from './cache.service';
import { ToastService } from './toast.service';

@Injectable()
export class JwtAuthService implements HttpInterceptor {
    private refreshTokenInProgress = false;
    private refreshTokenSubject = new BehaviorSubject(null);

    constructor(private authService: AuthService,
        private router: Router,
        private cache: CacheService,
        private tostar: ToastService) { }

    addAuthToken(request) {
        // const token = this.authService.getAuthToken();

        if (!this.cache.user.token) {
            return request;
        }

        return request.clone({
            setHeaders: {
                Authorization: this.cache.user.token
            }
        });
    }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
console.log('call');

        return next.handle(this.addAuthToken({ request })).pipe(
            catchError((error: HttpErrorResponse) => {
                // if (requestError && requestError.status === 401) {
                //     if (this.refreshTokenInProgress) {
                //         return this.refreshTokenSubject.pipe(
                //             filter((result) => result),
                //             take(1),
                //             switchMap(() => next.handle(this.addAuthToken(request)))
                //         );
                //     } else {
                //         this.refreshTokenInProgress = true;
                //         this.refreshTokenSubject.next(null);

                //         return this.authService.refreshAuthToken().pipe(
                //             switchMap((token) => {
                //                 this.refreshTokenSubject.next(token);
                //                 return next.handle(this.addAuthToken(request));
                //             }),
                //             finalize(() => (this.refreshTokenInProgress = false))
                //         );
                //     }
                // } else {
                //     return throwError(() => new Error(requestError.message));
                // }

                let errorMessage = '';
                if (error.error instanceof ErrorEvent) {
                    // client-side error
                    errorMessage = `Error: ${error.error.message}`;
                } else {
                    // server-side error
                    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                }
                switch (error.status) {
                    case 0: this.tostar.error("Internal Server Error");
                        this.router.navigate(['login']);
                        break;
                    case 204: this.tostar.error("Not Available");
                        break;
                    case 401: this.tostar.error("Unauthorized");
                        break;
                    case 404: this.tostar.error("Requested is invalid");
                        break;
                    case 409: this.tostar.error("Already Exist");
                        break;
                    case 500: this.tostar.error("Internal Server Error");
                        break;
                    default: this.tostar.error(errorMessage);
                        break;
                }
                console.log(errorMessage);
                
                return throwError(() => new Error(errorMessage));
            })
        );
    }
}