import { Component, OnInit } from '@angular/core';
import {fbService} from '../../core/services/fb.service';

@Component({
  selector: 'app-home',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(public _fb: fbService) { }

  ngOnInit() {
  }

    public logout() {
        this._fb.logout()
            .then(res => {
                console.log('logout', res);
            })
            .catch(function (error) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('errorCode', errorCode);
            });
    }

}
