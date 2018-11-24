import { NgModule } from "@angular/core";
import { LoginPageComponent } from "./login-page/login-page.component";
import { SharedModule } from "../shared/shared.module";
import { SignupPageComponent } from "./signup-page/signup-page.component";
import { AuthPagesRoutingModule } from "./auth-pages-routing.module";
import { AuthPagesComponent } from "./auth-pages.component";
import { AuthFormComponent } from "./auth-form.component";

@NgModule({
    declarations: [
        LoginPageComponent,
        SignupPageComponent,
        AuthPagesComponent,
        AuthFormComponent
    ],
    imports: [SharedModule, AuthPagesRoutingModule]
})
export class AuthPagesModule { }
