import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {NotificationsService} from 'angular2-notifications';
import {fbService} from '../../core/services/fb.service';

@Component({
    selector: 'app-create-masters',
    templateUrl: './create-masters.component.html',
    styleUrls: ['./create-masters.component.scss']
})
export class CreateMastersComponent implements OnInit {

    public form: FormGroup;
    public isLoading: boolean = false;

    constructor(private _fb: fbService,
                private _notificationsService: NotificationsService) {
    }

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        this.form = new FormGroup({
            'title': new FormControl('', Validators.required),
            'text': new FormControl('', Validators.required),
            'price': new FormControl('', Validators.required),
            'city': new FormControl('', Validators.required),
            'images': new FormArray([])
        });
    }

    submitMasters() {
        this.isLoading = true;
        this._fb.createMasters(this.form.value)
            .then(res => {
                console.log('Document written masters');
                this._notificationsService.success('Success', null,{
                    timeOut: 2000,
                    showProgressBar: true,
                    pauseOnHover: true,
                    clickToClose: false,
                    clickIconToClose: true
                });
                this.form.reset();
            })
            .catch(error =>  {
                console.error('Error adding document: ', error);
            })
            .finally(() => {
                this.isLoading = false;
            });
    }

    public addFileUrl(url) {
        const images = this.form.get('images') as FormArray;
        const item = new FormGroup({
            'url': new FormControl(url)
        });
        images.push(item);
    }

}
