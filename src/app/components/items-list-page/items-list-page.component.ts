import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-items-list-page',
  templateUrl: './items-list-page.component.html',
  styleUrls: ['./items-list-page.component.scss']
})
export class ItemsListPageComponent implements OnInit {
  items: Item[]

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.fetchItems().subscribe(items => this.items = items);
  }
}
