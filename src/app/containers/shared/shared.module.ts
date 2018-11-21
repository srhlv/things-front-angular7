import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from '../../app-routing.module';

import { CommonModule } from '@angular/common';
import { MediaPreviewDirective } from './media-preview.directive';
import { AuthFormComponent } from './auth-form.component';

@NgModule({
  declarations: [MediaPreviewDirective, AuthFormComponent],
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
    AuthFormComponent,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class SharedModule { }
