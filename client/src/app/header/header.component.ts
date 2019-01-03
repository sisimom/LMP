import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../service/workflow.service';
import { Router } from '@angular/router';
import { UserService } from '../service//user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userName: string;

  constructor(
    public WorkflowService: WorkflowService,
    private router: Router,
    private userService: UserService
    ) {
    this.WorkflowService.loginUserName = localStorage.getItem('userName');
  }

  ngOnInit() {
  }

  public logout() {
    var userToken = localStorage.getItem('userToken');
    this.userService.logout(userToken).subscribe(
      (data: any) => {

        console.log("data ==== >> ", data);
      //  localStorage.setItem('userToken', data.id);
        
        });
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    //window.location.replace('/');
    this.router.navigate(['/login']);
  }
}
