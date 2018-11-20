import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Store } from '@ngrx/store';
import { ThingsState } from 'src/app/store';
import { AuthSubmit } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private store: Store<ThingsState>) { }

  ngOnInit() {
  }

  onClickSubmit(user: User) {
    this.store.dispatch(new AuthSubmit(user));
  }
}
