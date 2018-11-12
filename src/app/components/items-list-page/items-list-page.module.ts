import { ItemsListPageComponent } from "./items-list-page.component";
import { ItemRowComponent } from "./item-row/item-row.component";
import { AddItemPopoverComponent } from "./add-item-popover/add-item-popover.component";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ItemsListPageRoutingModule } from "./items-list-page-routing.module";

@NgModule({
    declarations: [
        ItemsListPageComponent,
        ItemRowComponent,
        AddItemPopoverComponent
    ],
    imports: [SharedModule, ItemsListPageRoutingModule]
})

export class ItemsListPageModule { }
