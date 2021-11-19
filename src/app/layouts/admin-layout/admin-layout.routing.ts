import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { EmployerListComponent } from '../../employer-list/employer-list.component';
import { CandidateListComponent } from '../../candidate-list/candidate-list.component';
import { CandidateDetailComponent } from '../../candidate-detail/candidate-detail.component';
import { EmployerDetailComponent } from '../../employer-detail/employer-detail.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { PageListComponent } from '../../pages/page-list/page-list.component';
import { AdvertisementListComponent } from '../../advertisements/advertisement-list/advertisement-list.component';
import { JobListComponent } from '../../jobs/job-list/job-list.component';

import { PageDetailComponent } from '../../pages/page-detail/page-detail.component';
import { AdvertisementDetailComponent } from '../../advertisements/advertisement-detail/advertisement-detail.component';
import { JobDetailComponent } from '../../jobs/job-detail/job-detail.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'employers',      component: EmployerListComponent },
    { path: 'candidate/:id',     component: CandidateDetailComponent },
    { path: 'employer/:id',      component: EmployerDetailComponent },
    { path: 'candidate/view/:id',     component: CandidateDetailComponent },
    { path: 'employer/view/:id',      component: EmployerDetailComponent },
    { path: 'candidates',     component: CandidateListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'pages',      component: PageListComponent },
    { path: 'page/:id',     component: PageDetailComponent },
    { path: 'page/view/:id',     component: PageDetailComponent },
    { path: 'advertisements',      component: AdvertisementListComponent },
    { path: 'advertisement/:id',     component: AdvertisementDetailComponent },
    { path: 'advertisement/view/:id',     component: AdvertisementDetailComponent },
    { path: 'jobs',      component: JobListComponent },
    { path: 'job/:id',     component: JobDetailComponent },
    { path: 'job/view/:id',     component: JobDetailComponent },
    
];
