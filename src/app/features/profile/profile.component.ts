import {Component, OnInit} from '@angular/core';
import {fbService} from '../../core/services/fb.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public request = {};
  profileForm: FormGroup;

  constructor(private _fb: fbService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.getData();
  }

  initForm() {
    this.profileForm = this.formBuilder.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        email: ['', Validators.required]
    });
  }

  getData() {
    this._fb.getProfile()
      .then(doc => {
        if (doc.exists) {
          this.request = doc.data();
          this.fillForm();
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      }).catch(function (error) {
      console.log('Error getting document:', error);
    });
  }

  fillForm() {
    Object.getOwnPropertyNames(this.profileForm.controls).forEach(field => {
      const value = this.request[field];
      this.profileForm.controls[field].setValue(value);
    });
  }

}
