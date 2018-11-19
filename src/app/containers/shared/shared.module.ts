import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from '../../app-routing.module';

import { CommonModule } from '@angular/common';
import { MediaPreviewDirective } from './media-preview.directive';

@NgModule({
  declarations: [MediaPreviewDirective],
  imports: [
    CommonModule,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],

  exports: [
    CommonModule,
    MediaPreviewDirective,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class SharedModule { }
