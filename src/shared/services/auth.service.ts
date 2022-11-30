import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, TemplateRef } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AppConstants } from '../modals/app-constants';

import { CacheService } from "./cache.service";

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(public cache: CacheService, private http: HttpClient) {

    }
} 