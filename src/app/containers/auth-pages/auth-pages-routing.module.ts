import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthPagesComponent } from './auth-pages.component';

const routes: Routes = [
  {
    path: '', component: AuthPagesComponent, children: [
      {
        path: 'login', component: LoginPageComponent
      }, {
        path: 'signup', component: SignupPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthPagesRoutingModule { }
