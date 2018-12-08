import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store'

@Component({
  templateUrl: './user-pages-common.component.html',
  styleUrls: ['./user-pages-common.component.scss']
})
export class UserPagesCommonComponent implements OnInit {
  
  constructor(private store: Store<fromStore.ThingsState>) { }

  ngOnInit() {
    
  }
}
