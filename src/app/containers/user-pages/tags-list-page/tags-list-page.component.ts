import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item';
import * as fromStore from 'src/app/store';

@Component({
  templateUrl: './tags-list-page.component.html',
  styleUrls: ['./tags-list-page.component.scss']
})
export class TagsListPageComponent implements OnInit {
  tags$: Observable<Item[]>

  constructor(private store: Store<fromStore.ThingsState>) { }

  ngOnInit() {
    /* this.tags$ = this.store.select(fromStore.getAllTags);
    this.store.dispatch(new fromStore.LoadTags()); */
  }
}
