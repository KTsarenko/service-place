import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../core/services/request.service";
import {RequestModel} from "../../core/models/request.model";

@Component({
    selector: 'app-customers-ads',
    templateUrl: './customers-ads.component.html',
    styleUrls: ['./customers-ads.component.scss']
})
export class CustomersAdsComponent implements OnInit {

    public requests: Array<RequestModel>;

    constructor(private _requestService: RequestService) {
    }

    ngOnInit() {
        this.getCustomersRequest();
    }

    private getCustomersRequest(): void {
        this.requests = this._requestService.getCustomersRequest();
        console.log('requests', this.requests);
    }
}
