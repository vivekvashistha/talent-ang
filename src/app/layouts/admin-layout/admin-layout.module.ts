import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { CandidateListComponent } from '../../candidate-list/candidate-list.component';
import { EmployerListComponent } from '../../employer-list/employer-list.component';
import { CandidateDetailComponent } from '../../candidate-detail/candidate-detail.component';
import { EmployerDetailComponent } from '../../employer-detail/employer-detail.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

//import { PageListComponent } from '../../pages/page-list/page-list.component';
//import { AdvertisementListComponent } from '../../advertisements/advertisement-list/advertisement-list.component';
//import { JobListComponent } from '../../jobs/job-list/job-list.component';

//import { PageDetailComponent } from '../../pages/page-detail/page-detail.component';
//import { AdvertisementDetailComponent } from '../../advertisements/advertisement-detail/advertisement-detail.component';
//import { JobDetailComponent } from '../../jobs/job-detail/job-detail.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    CandidateListComponent,
    EmployerListComponent,
    CandidateDetailComponent,
    EmployerDetailComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    //PageListComponent,
    //AdvertisementListComponent,
    //JobListComponent,
    //PageDetailComponent,
    //AdvertisementDetailComponent,
    //JobDetailComponent,
  ]
})

export class AdminLayoutModule {}
