import {Component, OnInit} from '@angular/core';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from 'ngx-gallery';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    ngOnInit(): void {

        this.galleryOptions = [
            {
                "image": false,
                "thumbnailsRemainingCount": true,
                "height": "100px"
            },
            {
                "breakpoint": 500,
                "width": "100%",
                "thumbnailsColumns": 2
            }
        ]

        this.galleryImages = [
            {
                small: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
                medium: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
                big: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg'
            },
            {
                small: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
                medium: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
                big: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg'
            }
        ];
    }
}