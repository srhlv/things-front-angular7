import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import { AppRoutingModule } from '../app-routing.module';
import { MediaPreviewDirective } from './media-preview.directive';



@NgModule({
  declarations: [MediaPreviewDirective],
  imports: [
    CommonModule,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SidebarModule.forRoot()
  ],

  exports: [
    CommonModule,
    MediaPreviewDirective,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SidebarModule
  ]
})
export class SharedModule { }
