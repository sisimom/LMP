import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../service/workflow.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
  // host: {
  //   '(document:click)': 'onClick($event)',
  // }
})
export class HeaderComponent implements OnInit {
  public userName: string;

  constructor(
    public WorkflowService: WorkflowService,
    private router: Router
    ) {
    this.WorkflowService.loginUserName = localStorage.getItem('userName');
  }

  ngOnInit() {
  }

  public logout() {
    console.log("1111")
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    window.location.replace('/');
  }
  public isCollapsed:boolean = true;
  // onClick(event){console.log(this.isCollapsed);
  //   // if(this.isCollapsed==false){
  //   //   this.isCollapsed=true;
  //   //   console.log(this.isCollapsed);
  //   if (!this._eref.nativeElement.contains(event.target)){
  //     if(this.isCollapsed==false){
  //       //   this.isCollapsed=true;
  //       //   console.log(this.isCollapsed);
  //   }
  // }
}
