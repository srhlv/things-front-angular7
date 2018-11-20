import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { reducers, effects } from './index';
import { environment } from 'src/environments/environment';
import { authReducer } from './reducers/auth.reducer'
import { AuthEffects } from './effects/auth.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    // StoreModule.forFeature('things', reducers),
    // StoreModule.forFeature('loginPage', authReducer),
    EffectsModule.forRoot([]),
    // EffectsModule.forRoot([]),
    EffectsModule.forFeature(effects),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25
    }) : [],
  ],
  exports: [
    StoreModule, EffectsModule
  ]
})
export class ThingsStoreModule { }
