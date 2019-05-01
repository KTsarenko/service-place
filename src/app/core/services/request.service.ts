import {Injectable} from '@angular/core';
// import {RequestModel} from "../models/request.model";
import {fbService} from './fb.service';

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    constructor(private _fb: fbService) {
    }

    public getCustomersRequest() {
        return this._fb.getCustomers();
    }

    public getMastersRequest() {
        return this._fb.getMasters();
    }

    public createCustomers(data): any {
        return this._fb.createCustomers(data);
    }
    public createMasters(data) {
        return this._fb.createMasters(data);
    }


    public getSingleRequest(id, collection) {
        return this._fb.getSingle(id, collection);
    }

}
