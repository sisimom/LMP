import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { AppConstants } from '../common/constants/constants';
import { WorkflowService } from '../service/workflow.service';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  public forgotpasswordForm: FormGroup;
  public submitted = false;
  public returnUrl: String;
  public typeScript = String;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router,
    private WorkflowService: WorkflowService,
    ) {
      this.WorkflowService.isUserLogin = false;
    }

  ngOnInit() {
    this.forgotpasswordForm = this.formBuilder.group({
      emailid: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  //  console.log("this.forgotpasswordForm = > ", this.forgotpasswordForm.controls)
  }

  get f() { 
   // console.log("this.forgotpasswordForm = > ", this.forgotpasswordForm)
    return this.forgotpasswordForm.controls; }

  onSubmit() {
    console.log("emailid =>");
    if (this.forgotpasswordForm.invalid) {
      return;
    }
    const emailid = this.forgotpasswordForm.controls['emailid'].value;
    console.log("emailid =>", emailid);
  }

}
