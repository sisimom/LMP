import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImporttemplateComponent } from '../importtemplate/importtemplate.component';
import { UsermanagementComponent } from '../usermanagement/usermanagement.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { Ng2TableModule } from 'ng2-table/ng2-table';


@NgModule({
  declarations: [
    UsermanagementComponent,
    ImporttemplateComponent,
    FileSelectDirective,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    Ng2TableModule,
    
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class UsermanagementModule { }
