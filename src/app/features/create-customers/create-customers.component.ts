import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RequestService} from '../../core/services/request.service';

@Component({
    selector: 'app-create-customers',
    templateUrl: './create-customers.component.html',
    styleUrls: ['./create-customers.component.scss']
})
export class CreateCustomersComponent implements OnInit {

    form: FormGroup;

    constructor(private _requestService: RequestService) {
    }

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        this.form = new FormGroup({
            'title': new FormControl('', Validators.required),
            'image': new FormControl(),
            'text': new FormControl('', Validators.required),
            'price': new FormControl('', Validators.required),
            'city': new FormControl('', Validators.required),
            'street': new FormControl('', Validators.required),
            'date': new FormControl('', Validators.required),
            'images': new FormArray([])
        });
    }

    submitCustomers() {
        console.log(this.form.value);
        this._requestService.createCustomers(this.form.value);
    }

    private addFileUrl(url) {
        const images = this.form.get('images') as FormArray;
        const item = new FormGroup({
            'url': new FormControl(url)
        });
        images.push(item);
    }

}
