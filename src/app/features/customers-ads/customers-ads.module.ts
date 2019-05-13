import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomersAdsComponent} from './customers-ads.component';
import {SinglePageComponent} from '../single-page/single-page.component';
import {SharedModule} from '../../shared/shared.module';


const routes: Routes = [
    { path: '', component: CustomersAdsComponent},
    {path: ':id', component: SinglePageComponent},
    { path: '**', redirectTo: ''}
];


@NgModule({
    declarations: [
        CustomersAdsComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class CustomersAdsModule { }