import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCredentials} from '../Module/user-credentials';
import {AppConstants} from '../Module/app-constants';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }
  
  public checkUserName(username:String):Observable<UserCredentials>{
    return this.http.get<UserCredentials>(AppConstants.API_ENDPOINT+'/authontication/check-username/'+username);
  }
  public checkUser(userCredential:UserCredentials){
    return this.http.post<UserCredentials>(AppConstants.API_ENDPOINT+'/authontication/check-password',userCredential);
  }
  public getToken(): string {
    return localStorage.getItem('token');
  }
  private setSession(authResult) {
   // const expiresAt = moment().add(authResult.expiresIn,'second');

    //localStorage.setItem('id_token', authResult.idToken);
   // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
}          



public isLoggedIn() {
    //return moment().isBefore(this.getExpiration());
}

isLoggedOut() {
   // return !this.isLoggedIn();
}

getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    //return moment(expiresAt);
}    }
