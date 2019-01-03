import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from '../app/login/login.module';
import { ForgotpasswordModule } from '../app/forgotpassword/forgotpassword.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ResetpasswordModule } from './resetpassword/resetpassword.module';
import { UsermanagementModule } from './usermanagement/usermanagement.module';
import { EmaildeliveryComponent } from './emaildelivery/emaildelivery.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DashboardComponent,
    EmaildeliveryComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HeaderModule,
    LoginModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    ResetpasswordModule,
    UsermanagementModule,
    ForgotpasswordModule,
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }