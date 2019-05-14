import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SrmService {

  constructor(private http: HttpClient) { }
  public func(){
   return this.http.get(environment.restURL+'api/SRMs?filter=%7B%22limit%22%3A1000%7D')
  }
  public func1(){
    return this.http.get(environment.restURL+'api/SRMs/status')
  }
}
