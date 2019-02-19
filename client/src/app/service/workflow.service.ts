import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {
  public isUserLogin: Boolean = true;
  public userRole: Boolean = false;
  public loginUserName: string;
  constructor() { }
}
