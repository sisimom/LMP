import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from '../app/login/login.module';
import { ForgotpasswordModule } from '../app/forgotpassword/forgotpassword.module';
import { HttpClientModule } from '@angular/common/http';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ResetpasswordModule } from './resetpassword/resetpassword.module';
import { ImporttemplateComponent } from './importtemplate/importtemplate.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DashboardComponent,
    ForgotpasswordComponent,
    UsermanagementComponent,
    ImporttemplateComponent,
    
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HeaderModule,
    LoginModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    ResetpasswordModule
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }