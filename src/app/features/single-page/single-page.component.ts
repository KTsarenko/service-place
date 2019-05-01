import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../core/services/request.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-single-page',
    templateUrl: './single-page.component.html',
    styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent implements OnInit {

    public request: Object = {};

    constructor(private _requestService: RequestService,
                private router: Router) {
    }

    ngOnInit() {
        const [blank, container, collection, id] = this.router.url.split('/');
        this.getSingleRequest(id, collection);
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
