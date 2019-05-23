import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RequestModel} from '../../core/models/request.model';
import {fbService} from '../../core/services/fb.service';


@Component({
    selector: 'app-single-page',
    templateUrl: './single-page.component.html',
    styleUrls: ['./single-page.component.scss']
})

export class SinglePageComponent implements OnInit {

    public request: RequestModel;
    public galleryOptions = [];
    public galleryImages = [];
    public hasLoaded = false;

    constructor(private _fb: fbService,
                private router: Router) {
        this.galleryOptions = [
            {
                'image': false,
                'thumbnailsRemainingCount': true,
                'height': '150px'
            },
            {
                'breakpoint': 500,
                'width': '100%',
                'thumbnailsColumns': 2
            }
        ];
    }

    ngOnInit() {
        const [blank, container, collection, id] = this.router.url.split('/');
        this.getSingleRequest(id, collection);
        // this.request = {};
    }

    private getSingleRequest(id, collection): void {
        this._fb.getSingle(id, collection)
            .then(doc => {
                if (doc.exists) {
                    const data = doc.data();
                    this.request = data;
                    this.galleryImages = this.setGalleryImg(data.images);
                    this.hasLoaded = true;
                    // console.log(this.request);
                } else {
                    console.log('No such document!');
                }
            }).catch(function (error) {
            console.error('Error getting document:', error);
        });
    }

    private setGalleryImg(imgArr): Array<Object> {
        const galleryImgArr = [];
        imgArr.forEach(img => {
            const galleryImg = {
                small: img.url,
                medium: img.url,
                big: img.url
            };
            galleryImgArr.push(galleryImg);
        });
        return galleryImgArr;
    }
}