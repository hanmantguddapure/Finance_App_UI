import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Dashboard } from 'src/shared/modals/dashboard';
import { AppConstants } from 'src/shared/modals/app-constants';
import { AppSummary } from 'src/shared/modals/app-summary';
import { ApiService } from '../services/api.service';

@Injectable({
    providedIn: 'root'
})
export class DashBoardService {

    constructor(private http: HttpClient, private apiService: ApiService) { }
    public getDashboard() {

        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/dashboard/dashboard').then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }
    public getAllSummaryRepo(loanStatus: any, fdStatus: any) {

        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/dashboard/get-all-summary-repo/' + loanStatus + '/' + fdStatus).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

}
