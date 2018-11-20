import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemsListPageModule } from './containers/items-list-page/items-list-page.module';
import { CoreModule } from './services/core.module';
import { LoginPageModule } from './containers/login-page/login-page.module';
import { SharedModule } from './containers/shared/shared.module';
import { SignupPageModule } from './containers/signup-page/signup-page.module';
import { ThingsStoreModule } from './store/things-store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ThingsStoreModule,

    ItemsListPageModule,
    LoginPageModule,
    SignupPageModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
