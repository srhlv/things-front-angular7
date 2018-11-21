import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { ThingsState, isAuthFailed } from 'src/app/store';
import { LoginSubmit } from '../../store/actions/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  authFailed$: Observable<boolean>

  constructor(private store: Store<ThingsState>) { 
    this.authFailed$ = store.select(isAuthFailed);
    console.log('authFailed', this.authFailed$)
  }

  ngOnInit() {
  }

  onClickSubmit(user: User) {
    this.store.dispatch(new LoginSubmit(user));
  }
}
