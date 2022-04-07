import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'login-component', component: LoginComponent ,
  
    children: [
      {
        path:'homepage-component',
        component: HomepageComponent
      }
    ]},
  { path: 'homepage-component', component: HomepageComponent },
  { path: 'registration-component', component: RegistrationComponent },
  { path: '',   redirectTo: '/login-component', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
