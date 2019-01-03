import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { AppConstants } from '../common/constants/constants';
import { WorkflowService } from '../service/workflow.service';
import { UserService } from '../service//user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  public resetpasswordForm: FormGroup;
  public submitted = false;
  public returnUrl: String;
  public loading = false;


  constructor(
    private elRef: ElementRef,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private WorkflowService: WorkflowService,
    private userService: UserService) {
    this.WorkflowService.isUserLogin = false;
  }


  ngOnInit() {
    this.resetpasswordForm = this.formBuilder.group({
      currentpassword: ['', Validators.required],
      newpassword: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.resetpasswordForm.controls;
  }


  onSubmit() {

    this.submitted = true;

    if (this.resetpasswordForm.invalid) {
      return;
    }

    const currentpassword = this.resetpasswordForm.controls['currentpassword'].value;
    const newpassword = this.resetpasswordForm.controls['newpassword'].value;
    const confirmpassword = this.resetpasswordForm.controls['confirmpassword'].value;
    
    localStorage.setItem('confirmpassword', confirmpassword);
    this.userService.resetPassword(newpassword)
      .subscribe(
        (data: any) => {
          this.router.navigate(['/']);
        });
  }

}
