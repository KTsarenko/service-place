import {Component, OnInit} from '@angular/core';

import {UserService} from '../../core/services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {NotificationsService} from 'angular2-notifications';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    public showAuthForm = 'login';

    constructor(private _userService: UserService,
                private _notificationsService: NotificationsService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    }

    get f() { return this.loginForm.controls; }

    public signUp() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;

        this._userService.signUp(this.loginForm.value.username, this.loginForm.value.password)
            .then(res => {
                console.log('res', res);
                this.router.navigate([this.returnUrl]);
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

        this._userService.signIn(this.loginForm.value.username, this.loginForm.value.password)
            .then(res => {
                console.log('res', res);
                this.router.navigate([this.returnUrl]);
            })
            .catch(function (error) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('errorCode', errorCode);
                // this._notificationsService.success('Success', null,{
                //     timeOut: 2000,
                //     showProgressBar: true,
                //     pauseOnHover: true,
                //     clickToClose: false,
                //     clickIconToClose: true
                // });

            });
        this.loading = false;
    }

    public logout() {
        this._userService.logout()
            .then(res => {
                console.log('logout', res);
            })
            .catch(function (error) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('errorCode', errorCode);
            });
    }

}
