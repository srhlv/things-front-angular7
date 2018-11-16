import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
    selector: '[item-row]',
    templateUrl: './item-row.component.html',
    styleUrls: ['./item-row.component.scss']
})
export class ItemRowComponent{
    @Input() item: Item;
    @Output() deleteItem = new EventEmitter<Item>();

    constructor() { }

    onDeleteItem(){
        this.deleteItem.emit(this.item);
    }
}
