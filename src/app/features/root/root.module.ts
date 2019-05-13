import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '../../shared/shared.module';
import {RootComponent} from './root.component';
import {HomeComponent} from '../home/home.component';
import {CreateOrderComponent} from '../create-order/create-order.component';
import {CreateMastersComponent} from '../create-masters/create-masters.component';
import {CreateCustomersComponent} from '../create-customers/create-customers.component';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {AuthGuard} from '../../core/guards/auth.guard';
import {ProfileComponent} from '../profile/profile.component';


const appRoutes: Routes = [
    {
        path: '', component: RootComponent, children: [
        {path: '', component: HomeComponent},
        {path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard]},
        {path: 'create', component: CreateOrderComponent, canActivate: [AuthGuard]},
        {path: 'masters', loadChildren: 'app/features/masters-ads/masters-ads.module#MastersAdsModule'},
        {path: 'customers', loadChildren: 'app/features/customers-ads/customers-ads.module#CustomersAdsModule'},
    ]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild(appRoutes),
        SimpleNotificationsModule.forRoot()
    ],
    declarations: [
        HomeComponent,
        RootComponent,
        CreateOrderComponent,
        CreateMastersComponent,
        CreateCustomersComponent,
        ProfileComponent
    ]
})
export class RootModule {
}
