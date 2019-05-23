import { Component, OnInit } from '@angular/core';
import {RequestModel} from "../../core/models/request.model";
import {fbService} from '../../core/services/fb.service';

@Component({
  selector: 'app-masters-ads',
  templateUrl: './masters-ads.component.html',
  styleUrls: ['./masters-ads.component.scss']
})
export class MastersAdsComponent implements OnInit {

    public requests: Array<RequestModel>;

    constructor(private _fb: fbService) {
    }

    ngOnInit() {
        this.getMastersRequest();
    }

    private getMastersRequest(): void {
        this.requests = this._fb.getMasters();
    }

}
