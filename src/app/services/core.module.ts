import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth.service';
import { ItemsService } from './items.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './app.interceptor';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
      AuthService,
      ItemsService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
      }
  ],
  exports: []
})
export class CoreModule {}