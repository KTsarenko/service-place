import {Component, OnInit} from '@angular/core';
import {RequestModel} from "../../core/models/request.model";
import {fbService} from '../../core/services/fb.service';

@Component({
    selector: 'app-customers-ads',
    templateUrl: './customers-ads.component.html',
    styleUrls: ['./customers-ads.component.scss']
})
export class CustomersAdsComponent implements OnInit {

    public requests: Array<RequestModel>;

    constructor(private _fb: fbService) {
    }

    ngOnInit() {
        this.getCustomersRequest();
    }

    private getCustomersRequest(): void {
        this.requests = this._fb.getCustomers();
    }
}
