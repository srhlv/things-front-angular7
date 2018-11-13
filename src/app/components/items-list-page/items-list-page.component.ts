import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Item } from 'src/app/models/item';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddItemModalComponent } from './add-item-modal/add-item-modal.component';

@Component({
  selector: 'app-items-list-page',
  templateUrl: './items-list-page.component.html',
  styleUrls: ['./items-list-page.component.scss']
})
export class ItemsListPageComponent implements OnInit {
  items: Item[]

  constructor(private itemsService: ItemsService, private modalService: NgbModal) { }

  ngOnInit() {
    this.itemsService.fetchItems().subscribe(items => this.items = items);
  }

  openAddItemModal(){
    this.modalService.open(AddItemModalComponent)
  }
}
