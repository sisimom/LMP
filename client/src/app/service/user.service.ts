import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public rootUrl: string;

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    })
  };

  public noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  public validateUser(userName, password) {
    const data = {
      "email": userName,
      "password": password
    }
    return this.http.post(environment.restURL + 'users/login', data, this.httpOptions);
  }

  public userAuthentication() {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'False' });
    return this.http.post(this.rootUrl + '/token', { headers: reqHeader });
  }

  public addUsers(data) {
    return this.http.post(environment.restURL + 'users', data, this.httpOptions);
  }

  public logout(userToken) {
    const data = {
      "access_token": userToken
    }
    return this.http.get(environment.restURL + 'users/logout', this.httpOptions);
  }

  public forgotPassword(emailid) {
    const data = {
      "email": emailid
    }
    return this.http.post(environment.restURL + 'users/reset', data, this.httpOptions);
  }
}
