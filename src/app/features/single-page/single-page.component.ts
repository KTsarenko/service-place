import {Component, NgModule, OnInit} from '@angular/core';
import {RequestService} from '../../core/services/request.service';
import {Router} from '@angular/router';
import {RequestModel} from '../../core/models/request.model';
import {GalleryComponent} from '../../shared/gallery/gallery.component';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
    selector: 'app-single-page',
    templateUrl: './single-page.component.html',
    styleUrls: ['./single-page.component.scss']
})

// @NgModule({
//     imports: [
//         GalleryComponent
//     ]
// })

export class SinglePageComponent implements OnInit {

    public request: any;
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    constructor(private _requestService: RequestService,
                private router: Router) {
    }

    ngOnInit() {
        const [blank, container, collection, id] = this.router.url.split('/');
        this.getSingleRequest(id, collection);
        this.request = {};

        this.galleryOptions = [
            {
                "image": false,
                "thumbnailsRemainingCount": true,
                "height": "150px"
            },
            {
                "breakpoint": 500,
                "width": "100%",
                "thumbnailsColumns": 2
            }
        ]

        this.galleryImages = [
            {
                small: 'https://firebasestorage.googleapis.com/v0/b/serviceplace-kt.appspot.com/o/images%2Fd1cd1117-4a59-442c-8ce8-927a30406a11.jpg?alt=media&token=deaae9cf-e1d5-496a-a006-649354de769e',
                medium: 'https://firebasestorage.googleapis.com/v0/b/serviceplace-kt.appspot.com/o/images%2Fd1cd1117-4a59-442c-8ce8-927a30406a11.jpg?alt=media&token=deaae9cf-e1d5-496a-a006-649354de769e',
                big: 'https://firebasestorage.googleapis.com/v0/b/serviceplace-kt.appspot.com/o/images%2Fd1cd1117-4a59-442c-8ce8-927a30406a11.jpg?alt=media&token=deaae9cf-e1d5-496a-a006-649354de769e'
            },
            {
                small: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
                medium: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
                big: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg'
            }
        ];

    }

    private getSingleRequest(id, collection): void {
        this._requestService.getSingleRequest(id, collection)
            .then(doc => {
                if (doc.exists) {
                    console.log('Document data:', doc.data());
                    this.request = doc.data();
                } else {
                    console.log('No such document!');
                }
            }).catch(function(error) {
            console.error('Error getting document:', error);
        });
    }

}
