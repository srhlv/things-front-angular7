import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { ThingsState, isAuthFailed } from 'src/app/store';
import { LoginSubmit } from '../../store/actions/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-pages.component.html',
  styleUrls: ['./auth-pages.component.scss']
})
export class AuthPagesComponent implements OnInit {

  authFailed$: Observable<boolean>

  constructor(private store: Store<ThingsState>) { 
    this.authFailed$ = store.select(isAuthFailed);
  }

  ngOnInit() {
  }

  onClickSubmit(user: User) {
    this.store.dispatch(new LoginSubmit(user));
  }
}
