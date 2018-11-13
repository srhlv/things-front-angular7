import { Component, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import SETTINGS from '../../../../app.settings'
import { HttpClient } from '@angular/common/http';
import { ItemsService } from "src/app/services/items.service";
import { Item } from "src/app/models/item";

@Component({
    selector: 'add-item-modal',
    templateUrl: './add-item-modal.component.html',
    styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent {
    constructor(public activeModal: NgbActiveModal, private itemsService: ItemsService) { }

    itemImage: File;

    onSaveItem(item: Item) {
        this.itemsService.createItem(item, this.itemImage).subscribe(result => {
            console.log(result)
            this.activeModal.close()
        })
    }

    onPickFile(files: File[]) {
        this.itemImage = files[0];
    }
}