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

    public getCustomerDetail(custId: any): Observable<Customer> {
        return this.http.get<Customer>(AppConstants.API_ENDPOINT + '/customer/find-byId/' + custId);
    }
    public getCustomerAllDetail(): Observable<Customer[]> {
        return this.http.get<Customer[]>(AppConstants.API_ENDPOINT + '/customer/find-all');
    }

    public editCustomerDetail(customer: Customer) {
        return this.http.put<Customer>(AppConstants.API_ENDPOINT + '/customer/edit', customer);
    }
    public saveCustContactPersionDetail(customer: Customer) {
        return this.http.post<Customer>(AppConstants.API_ENDPOINT + '/customer/contact-persions/add', customer);
    }
    public editCustContactPersionDetail(customer: Customer) {
        return this.http.put<Customer>(AppConstants.API_ENDPOINT + '/customer/contact-persions/edit', customer);
    }
    public getCustomerContactPeoples(custId: any): Observable<Customer[]> {
        return this.http.get<Customer[]>(AppConstants.API_ENDPOINT + '/customer/contact-persions/find-by-custId/' + custId);
    }

}
