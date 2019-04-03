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
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ResetpasswordModule } from './resetpassword/resetpassword.module';
import { UsermanagementModule } from './usermanagement/usermanagement.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SoftwarereleasematrixComponent } from './softwarereleasematrix/softwarereleasematrix.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DashboardComponent,
    ForgotpasswordComponent,
    SoftwarereleasematrixComponent,
    
    
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
    NgbModule,
    Ng2SmartTableModule,
    DatePickerModule,
    FormsModule,ReactiveFormsModule,
    NgSelectModule,
    NgMultiSelectDropDownModule,
    // Angular5Csv
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }