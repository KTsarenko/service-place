import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UploadComponent} from './upload/upload.component';
import {SinglePageComponent} from '../features/single-page/single-page.component';
import { GalleryComponent } from './gallery/gallery.component';
import {NgxGalleryModule} from 'ngx-gallery';


@NgModule({
    declarations: [
        UploadComponent,
        SinglePageComponent,
        GalleryComponent
    ],
    imports: [
        CommonModule,
        NgxGalleryModule
    ],
    exports: [
        UploadComponent,
        SinglePageComponent,
        GalleryComponent
    ]
})
export class SharedModule {
}
