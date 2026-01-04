import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { DashboardA } from './pages/dashboard-a/dashboard-a';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'dashboard-a', component: DashboardA },
];
