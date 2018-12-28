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
     //   'Authorization': "Basic " + btoa("admin:admin")
    })
  };

  public noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };


  constructor(private http: HttpClient) { }
  public validateUser(userName, password) {
    const data = {
      "email": userName,
      "password": password
    }
    // const data = {
    //   "email": "demo@gm.com",
    //   "password": "123456"
    // }
   
    //const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(environment.restURL + 'users/login', data, this.httpOptions);
  }

  public userAuthentication() {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'False' });
    return this.http.post(this.rootUrl + '/token', { headers: reqHeader });
  }
}
