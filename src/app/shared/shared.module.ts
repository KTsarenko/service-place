import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UploadComponent} from './upload/upload.component';
import {SinglePageComponent} from '../features/single-page/single-page.component';


@NgModule({
    declarations: [
        UploadComponent,
        SinglePageComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        UploadComponent,
        SinglePageComponent
    ]
})
export class SharedModule {
}
