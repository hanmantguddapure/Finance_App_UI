import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FDAccount } from '../Module/fdaccount';
import { AppConstants } from '../Module/app-constants';
import { FDInterestDtl } from '../Module/fdinterest-dtl';

@Injectable({
  providedIn: 'root'
})
export class FDServiceService {

  constructor(private http: HttpClient) { }
  
  public createNewFD(fdaccount:FDAccount){
    return this.http.post<FDAccount>(AppConstants.API_ENDPOINT+'/FD/new',fdaccount);
  }
  public closeFD(fdaccount:FDAccount){
    return this.http.post<FDAccount>(AppConstants.API_ENDPOINT+'/FD/close',fdaccount);
  }
  public getFDDetailByFDId(fdId){
    return this.http.get<FDAccount>(AppConstants.API_ENDPOINT+'/FD/find/'+fdId);
  }

  public getFdsByStatus(fdStatus){
    return this.http.get<FDAccount[]>(AppConstants.API_ENDPOINT+'/FD/find-all/'+fdStatus);
  }
  public getCustFDLst(custId){
    return this.http.get<FDAccount[]>(AppConstants.API_ENDPOINT+'/FD/findAll/'+custId);
  }
  public payInterestAmt(fdinterest:FDInterestDtl){
    return this.http.post<FDInterestDtl>(AppConstants.API_ENDPOINT+'/FD/pay-interst-amount',fdinterest);
  }

}
