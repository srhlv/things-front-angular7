import { ItemsListPageComponent } from "./items-list-page/items-list-page.component";
import { ItemRowComponent } from "./items-list-page//item-row/item-row.component";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { UserPagesRoutingModule } from "./user-pages-routing.module";
import { AddItemModalComponent } from "./items-list-page/add-item-modal/add-item-modal.component";
import { UserPagesCommonComponent } from "./user-pages-common.component";
import { TagsListPageComponent } from "./tags-list-page/tags-list-page.component";

@NgModule({
    declarations: [
        ItemsListPageComponent,
        TagsListPageComponent,
        UserPagesCommonComponent,

        ItemRowComponent,
        AddItemModalComponent
    ],
    entryComponents: [AddItemModalComponent],
    imports: [SharedModule, UserPagesRoutingModule]
})

export class UserPagesModule { }
