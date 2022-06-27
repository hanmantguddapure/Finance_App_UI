import { Injectable, Injector } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { CacheService } from 'src/shared/services/cache.service';
import { ToastService } from '../toast.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private cache: CacheService,
        private tostar: ToastService
    ) { }

    addAuthHeader(request: any) {
        if (this.cache.user.token != null) {
            request = request.clone({
                setHeaders: {
                    Authorization: this.cache.user.token
                }
            });
        }
        return request;
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = this.addAuthHeader(request);
        return next.handle(request).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
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
                return throwError(errorMessage);
            })
        )
    }

}
