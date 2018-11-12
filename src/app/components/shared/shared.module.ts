import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from '../../app-routing.module';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    AppRoutingModule,
    FormsModule,
    NgbModule

  ],

  exports: [
    CommonModule,

    AppRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class SharedModule { }
