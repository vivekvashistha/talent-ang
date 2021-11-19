import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobListComponent } from './job-list/job-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    JobListComponent,
    JobDetailComponent
   ],
  exports: [
    JobListComponent,
    JobDetailComponent
  ]
})
export class JobsModule { }
