import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FDAccount } from 'src/shared/modals/fdaccount';
import { AppConstants } from 'src/shared/modals/app-constants';
import { FDInterestDtl } from 'src/shared/modals/fdinterest-dtl';
import { ApiService } from '../services/api.service';

@Injectable({
    providedIn: 'root'
})
export class FDService {

    constructor(
        private http: HttpClient,
        private apiService: ApiService) { }

    public createNewFD(fdaccount: FDAccount) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.postAPI('/FD/new', fdaccount).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }
    public closeFD(fdaccount: FDAccount) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.postAPI('/FD/close', fdaccount).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }
    public getFDDetailByFDId(fdId: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/FD/find/' + fdId).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public getFdsByStatus(fdStatus: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/FD/find-all/' + fdStatus).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }
    public getCustFDLst(custId: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/FD/findAll/' + custId).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }
    public payInterestAmt(fdinterest: FDInterestDtl) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.postAPI('/FD/pay-interst-amount', fdinterest).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

}
