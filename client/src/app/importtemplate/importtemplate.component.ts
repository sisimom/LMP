import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { environment } from '../../environments/environment';
import {
  HttpClient,
  HttpHeaders
} from "@angular/common/http"
import { ViewChild, ElementRef } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import * as XLSX from 'ts-xlsx';
import { UserService } from "../service/user.service";

const uploadURL = environment.restURL + 'containers/container/upload';
const newUsersURL = environment.restURL + 'users';

@Component({
  selector: 'app-importtemplate',
  templateUrl: './importtemplate.component.html',
  styleUrls: ['./importtemplate.component.scss']
})
export class ImporttemplateComponent implements OnInit {

  @ViewChild('frame') frame: ElementRef;

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(
    public router: Router,
    private userService: UserService
  ) { }

  public uploader: FileUploader = new FileUploader({ url: uploadURL, itemAlias: 'Template' });

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);

      if (status == 200) {
        alert('File uploaded successfully');
        this.Upload();
       // this.router.navigate(['/usermanagement']);
      }
    };
  }

  arrayBuffer: any;
  file: File;
  incomingfile(event) {
    this.file = event.target.files[0];
  }

  Upload() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      var jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      console.log('jsonData => ', jsonData);

      this.userService.addUsers(jsonData)
      .subscribe(data=>{
        console.log(data);
      });
     
    }
    fileReader.readAsArrayBuffer(this.file);
    
  }

}

export class ModalFormComponent {
  modalFormLoginEmail = new FormControl('', Validators.email);
}
