import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dashboard } from 'src/shared/modals/dashboard';
import { AppConstants } from 'src/shared/modals/app-constants';
import { AppSummary } from 'src/shared/modals/app-summary';

@Injectable({
    providedIn: 'root'
})
export class DashBoardServiceService {

    constructor(private http: HttpClient) { }
    public getDashboard() {
        return this.http.get<Dashboard>(AppConstants.API_ENDPOINT + '/dashboard/dashboard');
    }
    public getAllSummaryRepo(loanStatus: any, fdStatus: any) {
        return this.http.get<AppSummary>(AppConstants.API_ENDPOINT + '/dashboard/get-all-summary-repo/' + loanStatus + '/' + fdStatus);
    }

}
