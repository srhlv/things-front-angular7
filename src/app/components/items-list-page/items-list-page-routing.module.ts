import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListPageComponent } from './items-list-page.component';

const routes: Routes = [
  { path: 'items', component: ItemsListPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ItemsListPageRoutingModule {
}
