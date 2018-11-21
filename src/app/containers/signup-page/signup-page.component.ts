import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models/user';
import { SignupSubmit, ThingsState } from '../../store';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  constructor(private store: Store<ThingsState>) { }

  ngOnInit() {
  }

  onClickSubmit(user: User) {
    this.store.dispatch(new SignupSubmit(user));
  }
}
