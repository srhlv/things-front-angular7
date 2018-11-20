import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { LoginPageComponent } from "./login-page.component";
import { LoginPageRoutingModule } from "./login-page-routing.module";
import { StoreModule } from '@ngrx/store';
import * as fromLoginPage from './login-page.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginPageEffects } from './login-page.effects';

@NgModule({
    declarations: [
        LoginPageComponent
    ],
    imports: [SharedModule, LoginPageRoutingModule, StoreModule.forFeature('loginPage', fromLoginPage.reducer), EffectsModule.forFeature([LoginPageEffects])]
})
export class LoginPageModule { }
