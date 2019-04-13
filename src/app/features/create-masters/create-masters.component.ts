import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RequestService} from '../../core/services/request.service';

@Component({
    selector: 'app-create-masters',
    templateUrl: './create-masters.component.html',
    styleUrls: ['./create-masters.component.scss']
})
export class CreateMastersComponent implements OnInit {

    myFormMasters: FormGroup;

    constructor(private _requestService: RequestService) {
        this.myFormMasters = new FormGroup({
            'title': new FormControl('', Validators.required),
            // 'image': new FormControl(),
            'text': new FormControl('', Validators.required),
            'price': new FormControl('', Validators.required),
            'city': new FormControl('', Validators.required),
            'street': new FormControl('', Validators.required),
            'date': new FormControl('', Validators.required),
        });
    }

    ngOnInit() {
    }

    submitMasters() {
        console.log(this.myFormMasters.value);
        this._requestService.createMasters(this.myFormMasters.value);
    }

}
