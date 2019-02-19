import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../service/workflow.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
}
