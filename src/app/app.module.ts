import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPagesModule } from './containers/auth-pages/auth-pages.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './services/core.module';
import { ThingsStoreModule } from './store/things-store.module';
import { UserPagesModule } from './containers/user-pages/user-pages.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ThingsStoreModule,

    AuthPagesModule,
    UserPagesModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
