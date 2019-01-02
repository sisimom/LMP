import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkflowService } from '../service/workflow.service';
import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
//import { EventshareService } from '../service/eventshare.service';
import { UserService } from '../service//user.service';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { AppConstants } from '../common/constants/constants';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted = false;
  public loading = false;
  public returnUrl: String;
  public serviceData: String;
  public isUserLogin: Boolean;
  public isLoginError: Boolean = false;
  public appName = AppConstants.project_name;
  public appInfo = AppConstants.project_des;

  constructor(private elRef: ElementRef, private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router, private WorkflowService: WorkflowService,
    // private EventshareService: EventshareService,
    private userService: UserService) {
    this.WorkflowService.isUserLogin = false;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    const userName = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;

    localStorage.setItem('userName', this.loginForm.controls['username'].value);

    this.WorkflowService.loginUserName = userName;
    this.WorkflowService.isUserLogin = true;
    
    this.userService.validateUser(userName, password).subscribe(
      (data: any) => {

        console.log("data ==== >> ", data);
        localStorage.setItem('userToken', data.id);
        //this.getAccessToken();
        this.router.navigate(['/dashboard']);
       // const header = document.getElementById('navbarNav');
      //  header.classList.add('navbar-border');
        /*with named routing it adds routing name like this (http://localhost:5200/(landingOutlet:home)) to avoid if
        i add skiplocation true then it clears url and  url looks like this (http://localhost:5200)
        with routes name in url */
     //   this.router.navigate([{outlets: {landingOutlet: ['home']}}], {skipLocationChange: true });

        },
        (err : HttpErrorResponse)=>{
        this.isLoginError = true;
      });
  }

  getAccessToken() {
    this.userService.userAuthentication();
  }
}
