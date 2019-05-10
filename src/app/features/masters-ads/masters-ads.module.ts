import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MastersAdsComponent} from './masters-ads.component';
import {SinglePageComponent} from '../single-page/single-page.component';
import {SharedModule} from '../../shared/shared.module';
import {GalleryComponent} from '../../shared/gallery/gallery.component';


const routes: Routes = [
    { path: '', component: MastersAdsComponent},
    {path: ':id', component: SinglePageComponent},
    { path: '**', redirectTo: ''}
];


@NgModule({
    declarations: [
        MastersAdsComponent,
        GalleryComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class MastersAdsModule { }
