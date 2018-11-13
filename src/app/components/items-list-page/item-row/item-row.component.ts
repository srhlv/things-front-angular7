import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
    selector: '[item-row]',
    templateUrl: './item-row.component.html',
    styleUrls: ['./item-row.component.scss']
})
export class ItemRowComponent{
    @Input() item: Item;

    constructor() { }
}
