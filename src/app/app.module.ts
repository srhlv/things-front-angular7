import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemsListPageModule } from './components/items-list-page/items-list-page.module';
import { CoreModule } from './services/core.module';
import { LoginPageModule } from './components/login-page/login-page.module';
import { SharedModule } from './components/shared/shared.module';
import { SignupPageModule } from './components/signup-page/signup-page.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule} from '@ngrx/store-devtools'
import { reducers, effects } from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('things', reducers),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),

    ItemsListPageModule,
    LoginPageModule,
    SignupPageModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
