import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {MastersAdsComponent} from "../masters-ads/masters-ads.component";
import {CustomersAdsComponent} from "../customers-ads/customers-ads.component";
import {RootComponent} from "./root.component";
import {HomeComponent} from "../home/home.component";
import {CreateOrderComponent} from "../create-order/create-order.component";

const appRoutes: Routes = [
    // { path: '', redirectTo: 'root', pathMatch: 'full'},
    {
        path: '', component: RootComponent, children: [
        {path: '', component: HomeComponent},
        {path: 'customers', component: CustomersAdsComponent},
        {path: 'masters', component: MastersAdsComponent},
        {path: 'create', component: CreateOrderComponent}
    ]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes)
    ],
    declarations: [
        HomeComponent,
        RootComponent,
        MastersAdsComponent,
        CustomersAdsComponent,
        CreateOrderComponent
    ]
})
export class RootModule {
}
