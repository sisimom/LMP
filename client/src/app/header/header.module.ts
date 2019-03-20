import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HeaderComponent
    ],
  exports: [HeaderComponent],

  imports: [
    CommonModule,
    BrowserModule,
      ReactiveFormsModule,
      MatMenuModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      NgbModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HeaderModule { }