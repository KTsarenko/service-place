import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-create-order',
    templateUrl: './create-order.component.html',
    styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

    myForm: FormGroup;

    constructor() {
        this.myForm = new FormGroup({

            'name': new FormControl('', Validators.required),
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

    submit() {
        console.log(this.myForm.value);
    }


}
