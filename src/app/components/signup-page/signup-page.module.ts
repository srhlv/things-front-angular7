import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { SignupPageComponent } from "./signup-page.component";
import { SignupPageRoutingModule } from "./signup-page-routing.module";

@NgModule({
    declarations: [
        SignupPageComponent
    ],
    imports: [SharedModule, SignupPageRoutingModule]
})
export class SignupPageModule { }
