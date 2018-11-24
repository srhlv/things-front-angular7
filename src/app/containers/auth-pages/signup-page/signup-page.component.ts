import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../../models/user';
import { SignupSubmit, ThingsState, isAuthFailed } from '../../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: []
})
export class SignupPageComponent {
  authFailed$: Observable<boolean>

  constructor(private store: Store<ThingsState>) { 
    this.authFailed$ = store.select(isAuthFailed);
  }

  onClickSubmit(user: User) {
    this.store.dispatch(new SignupSubmit(user));
  }
}
