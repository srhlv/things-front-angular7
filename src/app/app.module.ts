import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemsListPageModule } from './components/items-list-page/items-list-page.module';
import { CoreModule } from './services/core.module';
import { LoginPageModule } from './components/login-page/login-page.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,

    ItemsListPageModule,
    LoginPageModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
