import { ItemsListPageComponent } from "./items-list-page.component";
import { ItemRowComponent } from "./item-row/item-row.component";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ItemsListPageRoutingModule } from "./items-list-page-routing.module";
import { AddItemModalComponent } from "./add-item-modal/add-item-modal.component";

@NgModule({
    declarations: [
        ItemsListPageComponent,
        ItemRowComponent,
        AddItemModalComponent
    ],
    entryComponents: [AddItemModalComponent],
    imports: [SharedModule, ItemsListPageRoutingModule]
})

export class ItemsListPageModule { }
