import { Component } from '@angular/core';
import {fbService} from './core/services/fb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private _fb: fbService) {
        this._fb.initFbApp();
    }
}
