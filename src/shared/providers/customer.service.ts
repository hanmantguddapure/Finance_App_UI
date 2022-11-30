import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConstants } from 'src/shared/modals/app-constants';
import { Customer } from 'src/shared/modals/customer';
import { ApiService } from 'src/shared/services/api.service';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    constructor(
        private http: HttpClient,
        private apiService: ApiService
    ) { }

    saveCustomerDetail(data) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.postAPI('/customer/add', data).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public getCustomerDetail(custId: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/customer/find-byId/' + custId).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }
    public getCustomerAllDetail() {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/customer/find-all').then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public editCustomerDetail(customer: Customer) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.putAPI('/customer/edit', customer).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public saveCustContactPersionDetail(customer: Customer) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.postAPI('/customer/contact-persions/add', customer).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public editCustContactPersionDetail(customer: Customer) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.putAPI('/customer/contact-persions/edit', customer).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }

    public getCustomerContactPeoples(custId: any) {
        return new Promise<void>((resolve, reject) => {
            this.apiService.getAPI('/customer/contact-persions/find-by-custId/' + custId).then(resp => {
                resolve(resp);
            }, error => {
                reject(error);
            })
        });
    }
}
