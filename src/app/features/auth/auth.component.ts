import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {NotificationsService} from 'angular2-notifications';
import {fbService} from '../../core/services/fb.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    loginForm: FormGroup;
    signupForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    public showAuthForm = 'login';

    constructor(private _fb: fbService,
                private _notificationsService: NotificationsService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.signupForm = this.formBuilder.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    public signUp() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.signupForm.invalid) {
            return;
        }

        this.loading = true;
        const formData = this.signupForm.value;

        const profileObject = {
            name: formData.name,
            surname: formData.surname,
            email: formData.email
        };

        this._fb.signUp(formData.email, formData.password)
            .then(res => {
                this.router.navigate(['/']);
                this._fb.setProfile(profileObject, res.user.uid)
                    .then(data => {
                        // console.log('res', data);
                    });
            })
            .catch(function (error) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('errorCode', errorCode);
            });
        this.loading = false;
    }

    public signIn() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;

        this._fb.signIn(this.loginForm.value.email, this.loginForm.value.password)
            .then(res => {
                console.log('res', res);
                this._notificationsService.success('Success', null, {
                    timeOut: 4000,
                    showProgressBar: true,
                    pauseOnHover: true,
                    clickToClose: true,
                    clickIconToClose: true
                });
                this.router.navigate([this.returnUrl]);
            })
            .catch(error => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('errorCode', errorCode);
                this._notificationsService.error('Error', errorMessage, {
                    timeOut: 4000,
                    showProgressBar: true,
                    pauseOnHover: true,
                    clickToClose: true,
                    clickIconToClose: true
                });

            });
        this.loading = false;
    }

    public logout() {
        this._fb.logout()
            .then(res => {
                // console.log('logout', res);
                // console.log('logout', res.uid);
            })
            .catch(function (error) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('errorCode', errorCode);
            });
    }

}
