import { Routes } from '@angular/router';

import { AuthenticationComponent } from '../../authentication/authentication.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'auth/login',        component: AuthenticationComponent },
];
