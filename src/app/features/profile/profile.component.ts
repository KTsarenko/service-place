import {Component, OnInit} from '@angular/core';
import {fbService} from '../../core/services/fb.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    constructor(private _fb: fbService) {
    }

    ngOnInit() {
        this._fb.getProfile()
            .then(function(doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

}
