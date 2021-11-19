import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdvertisementDetailComponent } from './advertisement-detail/advertisement-detail.component';
import { AdvertisementListComponent } from './advertisement-list/advertisement-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    AdvertisementListComponent,
    AdvertisementDetailComponent
   ],
  exports: [
    AdvertisementListComponent,
    AdvertisementDetailComponent
  ]
})
export class AdvertisementsModule { }
