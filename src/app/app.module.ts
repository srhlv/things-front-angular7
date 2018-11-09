import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

import { AuthService } from './services/auth.service';
import { ItemsListPageComponent } from './components/items-list-page/items-list-page.component'
import { ItemsService } from './services/items.service';
import { AuthInterceptor } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ItemsListPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, ItemsService, {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi   : true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
