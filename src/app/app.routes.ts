import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RequestsComponent } from './requests/requests.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';

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
        path: 'orders',
        pathMatch: 'full',
        component: OrdersComponent
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
