import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListPageComponent } from './items-list-page/items-list-page.component';
import { UserPagesCommonComponent } from './user-pages-common.component';
import { TagsListPageComponent } from './tags-list-page/tags-list-page.component';

const routes: Routes = [
  {
    path: '', component: UserPagesCommonComponent, children: [
      { path: 'items', component: ItemsListPageComponent },
      { path: 'tags', component: TagsListPageComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserPagesRoutingModule {
}
