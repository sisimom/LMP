import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { AppConstants } from '../common/constants/constants';
import { WorkflowService } from '../service/workflow.service';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  public resetpasswordForm: FormGroup;
  public submitted = false;
  public returnUrl: String;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router,
    private WorkflowService: WorkflowService,
    ) {
      this.WorkflowService.isUserLogin = false;
    }

  ngOnInit() {
    this.resetpasswordForm = this.formBuilder.group({
      currentpassword: ['', Validators.required],
      newpassword: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  //  console.log("this.resetpasswordForm = > ", this.resetpasswordForm.controls)
  }

  get f() { 
   // console.log("this.resetpasswordForm = > ", this.resetpasswordForm)
    return this.resetpasswordForm.controls; }

  onSubmit() {
    console.log("emailid =>");
    // if (this.resetpasswordForm.invalid) {
    //   return;
    // }
    // const emailid = this.resetpasswordForm.controls['emailid'].value;
    // console.log("emailid =>", emailid);
  }
}
