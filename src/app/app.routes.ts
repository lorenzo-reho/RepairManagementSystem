import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RequestsComponent } from './requests/requests.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { WorkOrdersComponent } from './work-orders/work-orders.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: BodyComponent
    },
    {
        path: 'requests',
        pathMatch: 'full',
        component: RequestsComponent
    },
    {
        path: 'work-orders',
        pathMatch: 'full',
        component: WorkOrdersComponent
    },
    {
        path: 'users',
        pathMatch: 'full',
        component: UsersComponent
    },
    {
        path: 'settings',
        pathMatch: 'full',
        component: SettingsComponent
    },
    

];
