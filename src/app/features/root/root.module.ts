import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from "../../shared/shared.module";

import {MastersAdsComponent} from '../masters-ads/masters-ads.component';
import {CustomersAdsComponent} from '../customers-ads/customers-ads.component';
import {RootComponent} from './root.component';
import {HomeComponent} from '../home/home.component';
import {CreateOrderComponent} from '../create-order/create-order.component';
import {SinglePageComponent} from '../single-page/single-page.component';
import {CreateMastersComponent} from '../create-masters/create-masters.component';
import {CreateCustomersComponent} from '../create-customers/create-customers.component';



const appRoutes: Routes = [
    // { path: '', redirectTo: 'root', pathMatch: 'full'},
    {
        path: '', component: RootComponent, children: [
            {path: '', component: HomeComponent},
            {path: 'customers', component: CustomersAdsComponent},
            {path: 'masters', component: MastersAdsComponent},
            {path: 'create', component: CreateOrderComponent},
            {path: 'item/:id', component: SinglePageComponent}
        ]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild(appRoutes)
    ],
    declarations: [
        HomeComponent,
        RootComponent,
        MastersAdsComponent,
        CustomersAdsComponent,
        CreateOrderComponent,
        SinglePageComponent,
        CreateMastersComponent,
        CreateCustomersComponent,
    ]
})
export class RootModule {
}
