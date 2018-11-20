import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoginPageEffects } from './login-page.effects';

describe('LoginPageEffects', () => {
  let actions$: Observable<any>;
  let effects: LoginPageEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginPageEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(LoginPageEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
