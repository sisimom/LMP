import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImporttemplateComponent } from '../importtemplate/importtemplate.component';
import { UsermanagementComponent } from '../usermanagement/usermanagement.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    UsermanagementComponent,
    ImporttemplateComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class UsermanagementModule { }
