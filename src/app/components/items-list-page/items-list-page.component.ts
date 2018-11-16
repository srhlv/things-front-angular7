import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Item } from 'src/app/models/item';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddItemModalComponent } from './add-item-modal/add-item-modal.component';
import { Observable } from 'rxjs';
import * as fromStore from 'src/app/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-items-list-page',
  templateUrl: './items-list-page.component.html',
  styleUrls: ['./items-list-page.component.scss']
})
export class ItemsListPageComponent implements OnInit {
  items$: Observable<Item[]>

  constructor(private itemsService: ItemsService, private modalService: NgbModal, private store: Store<fromStore.ThingsState>) { }

  ngOnInit() {
    this.items$ = this.store.select(fromStore.getAllItems);
    this.store.dispatch(new fromStore.LoadItems());
  }

  openAddItemModal(){
    this.modalService.open(AddItemModalComponent)
  }

  deleteItem(item: Item){
    this.itemsService.deleteItem(item).subscribe(result => console.log)
  }
}
