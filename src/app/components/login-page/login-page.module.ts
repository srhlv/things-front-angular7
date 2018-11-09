import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { LoginPageComponent } from "./login-page.component";
import { LoginPageRoutingModule } from "./login-page-routing.module";

@NgModule({
    declarations: [
        LoginPageComponent
    ],
    imports: [SharedModule, LoginPageRoutingModule]
})
export class LoginPageModule { }
