import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageDetailComponent } from './page-detail/page-detail.component';
import { PageListComponent } from './page-list/page-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    PageListComponent,
    PageDetailComponent,
   ],
  exports: [
    PageListComponent,
    PageDetailComponent
  ]
})
export class PagesModule { }
