import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPagesModule } from './containers/auth-pages/auth-pages.module';
import { ItemsListPageModule } from './containers/items-list-page/items-list-page.module';
import { SharedModule } from './containers/shared/shared.module';
import { CoreModule } from './services/core.module';
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
    AuthPagesModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
