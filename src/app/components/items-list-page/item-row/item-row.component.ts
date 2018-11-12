import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Item } from 'src/app/models/item';

@Component({
    selector: '[item-row]',
    templateUrl: './item-row.component.html',
    styleUrls: ['./item-row.component.scss']
})
export class ItemRowComponent implements OnInit {
    @Input() item: Item;

    constructor() { }

    ngOnInit() {
    }
}
