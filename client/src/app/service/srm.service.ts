import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SrmService {

  constructor(private http: HttpClient) { }
  public func(){
   return this.http.get(environment.restURL+'srmdata?filter[offset]=0&filter[limit]=1000&filter[skip]=0')
  }
}
