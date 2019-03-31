import { Component, OnInit } from '@angular/core';
import {RequestModel} from "../../core/models/request.model";
import {RequestService} from "../../core/services/request.service";

@Component({
  selector: 'app-masters-ads',
  templateUrl: './masters-ads.component.html',
  styleUrls: ['./masters-ads.component.scss']
})
export class MastersAdsComponent implements OnInit {

    public requests: Array<RequestModel>;

    constructor(private _requestService: RequestService) {
    }

    ngOnInit() {
        this.getMastersRequest();
    }

    private getMastersRequest(): void {
        this.requests = this._requestService.getMastersRequest();
    }

}
