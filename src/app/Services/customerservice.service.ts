import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../Module/app-constants';
import { Customer } from '../Module/customer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http: HttpClient) { }
  public saveCustomerDetail(customer:Customer){
    return this.http.post<Customer>(AppConstants.API_ENDPOINT+'/customer/add-new',customer);
  }
  public getCustomerDetail(custId):Observable<Customer>{
    return this.http.get<Customer>(AppConstants.API_ENDPOINT+'/customer/find-byId/'+custId);
  }
  public getCustomerAllDetail():Observable<Customer[]>{
    return this.http.get<Customer[]>(AppConstants.API_ENDPOINT+'/customer/find-all');
  }
  
  public editCustomerDetail(customer:Customer){
    return this.http.put<Customer>(AppConstants.API_ENDPOINT+'/customer/edit',customer);
  }
  public saveCustContactPersionDetail(customer:Customer){
    return this.http.post<Customer>(AppConstants.API_ENDPOINT+'/customer/contact-persions/add',customer);
  }
  public editCustContactPersionDetail(customer:Customer){
    return this.http.put<Customer>(AppConstants.API_ENDPOINT+'/customer/contact-persions/edit',customer);
  }
  public getCustomerContactPeoples(custId):Observable<Customer[]>{
    return this.http.get<Customer[]>(AppConstants.API_ENDPOINT+'/customer/contact-persions/find-by-custId/'+custId);
  }

}
