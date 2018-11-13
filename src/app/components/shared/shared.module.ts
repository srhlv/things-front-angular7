import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from '../../app-routing.module';

import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { MediaPreviewDirective } from './media-preview.directive';

@NgModule({
  declarations: [MediaPreviewDirective],
  imports: [
    CommonModule,

    AppRoutingModule,
    FormsModule,
    NgbModule,
    FileUploadModule
  ],

  exports: [
    CommonModule,
    MediaPreviewDirective,

    AppRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class SharedModule { }
