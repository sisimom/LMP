import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { SoftwarereleasematrixComponent } from './softwarereleasematrix/softwarereleasematrix.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'usermanagement', component: UsermanagementComponent },
  { path: 'softwarereleasematrix', component: SoftwarereleasematrixComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
