import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { DashboardA } from './pages/dashboard-a/dashboard-a';
import { Blank } from './pages/blank/blank';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'dashboard-a', component: DashboardA },
    { path: 'blank', component: Blank },
];
