import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-importtemplate',
  templateUrl: './importtemplate.component.html',
  styleUrls: ['./importtemplate.component.scss']
})
export class ImporttemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


export class ModalFormComponent {
modalFormLoginEmail = new FormControl('', Validators.email);
modalFormLoginPassword = new FormControl('', Validators.required);
modalFormRegisterEmail = new FormControl('', Validators.email);
modalFormRegisterPassword = new FormControl('', Validators.required);
modalFormRegisterRepeatPassword = new FormControl('', Validators.required);
}