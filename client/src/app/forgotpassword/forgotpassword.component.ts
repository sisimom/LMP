import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { AppConstants } from '../common/constants/constants';
import { WorkflowService } from '../service/workflow.service';
import { UserService } from '../service//user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})

export class ForgotpasswordComponent implements OnInit {

  public forgotpasswordForm: FormGroup;
  public submitted = false;
  public loading = false;
  public returnUrl: String;

  constructor(private elRef: ElementRef, private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router,
    private WorkflowService: WorkflowService,
    private userService: UserService) {
    this.WorkflowService.isUserLogin = false;
  }

  ngOnInit() {
    this.forgotpasswordForm = this.formBuilder.group({
      emailid: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/forgotpassword';
  }

  get f() {
    return this.forgotpasswordForm.controls; }

  onSubmit() {

    this.submitted = true;

    if (this.forgotpasswordForm.invalid) {
      return;
    }
    
    const emailid = this.forgotpasswordForm.controls['emailid'].value;
    localStorage.setItem('emailid', emailid);
    this.userService.forgotPassword(emailid)
    .subscribe(
      (data: any) => {
        this.router.navigate(['/emaildelivery']);
      });
  }

}
