import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImporttemplateComponent } from '../importtemplate/importtemplate.component';
import { SoftwarereleasematrixComponent } from '../softwarereleasematrix/softwarereleasematrix.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import 'rxjs/add/observable/of';
import {MatAutocompleteModule,MatBadgeModule,MatBottomSheetModule,MatButtonModule,MatButtonToggleModule,MatCardModule,MatCheckboxModule,MatChipsModule,MatDatepickerModule,MatDialogModule,MatDividerModule,MatExpansionModule,MatGridListModule,MatIconModule,MatInputModule,MatListModule,MatMenuModule,MatNativeDateModule,MatPaginatorModule,MatProgressBarModule,MatProgressSpinnerModule,MatRadioModule,MatRippleModule,MatSelectModule,MatSidenavModule,MatSliderModule,MatSlideToggleModule,MatSnackBarModule,MatSortModule,MatStepperModule,MatTableModule,MatTabsModule,MatToolbarModule,MatTooltipModule,MatTreeModule
} from '@angular/material';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@NgModule({
    declarations: [
      SoftwarereleasematrixComponent,
      ImporttemplateComponent,
      FileSelectDirective,
    ],
    imports: [
      CommonModule,
      BrowserModule,
      MDBBootstrapModule.forRoot(),
      FormsModule,
      AppRoutingModule,
      Ng2SmartTableModule,
      DatePickerModule,
      NgbModule,
      NgSelectModule,
      NgMultiSelectDropDownModule,
      // Angular5Csv
    ],
    exports:[
      MatAutocompleteModule,MatBadgeModule,MatBottomSheetModule,MatButtonModule,MatButtonToggleModule,MatCardModule,MatCheckboxModule,MatChipsModule,MatDatepickerModule,MatDialogModule,MatDividerModule,MatExpansionModule,MatGridListModule,MatIconModule,MatInputModule,MatListModule,MatMenuModule,MatNativeDateModule,MatPaginatorModule,MatProgressBarModule,MatProgressSpinnerModule,MatRadioModule,MatRippleModule,MatSelectModule,MatSidenavModule,MatSliderModule,MatSlideToggleModule,MatSnackBarModule,MatSortModule,MatStepperModule,MatTableModule,MatTabsModule,MatToolbarModule,MatTooltipModule,MatTreeModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
  })
  export class SoftwarereleasematrixModule { }
  