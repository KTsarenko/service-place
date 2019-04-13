import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RequestService} from '../../core/services/request.service';

@Component({
    selector: 'app-create-customers',
    templateUrl: './create-customers.component.html',
    styleUrls: ['./create-customers.component.scss']
})
export class CreateCustomersComponent implements OnInit {

    myFormCustomers: FormGroup;

    constructor(private _requestService: RequestService) {
        this.myFormCustomers = new FormGroup({
            'title': new FormControl('', Validators.required),
            'image': new FormControl(),
            'text': new FormControl('', Validators.required),
            'price': new FormControl('', Validators.required),
            'city': new FormControl('', Validators.required),
            'street': new FormControl('', Validators.required),
            'date': new FormControl('', Validators.required),
        });
    }

    ngOnInit() {
    }

    submitCustomers() {
        console.log(this.myFormCustomers.value);
        this._requestService.createCustomers(this.myFormCustomers.value);
    }

}
