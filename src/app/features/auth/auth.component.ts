import {Component, OnInit} from '@angular/core';

import {UserService} from '../../core/services/user.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    public title: string;

    constructor(private _userService: UserService) {
    }

    ngOnInit() {
        this.title = "hi"
    }

    public signUp() {
        const email = 'konstantin.tsarenko1@gmail.com';
        const password = '9388212koS';
        this._userService.signUp(email, password)
            .then(res => {
                console.log('res', res);
            })
            .catch(function (error) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('errorCode', errorCode);
                // ...
            });
    }

    public signIn() {
        const email = 'konstantin.tsarenko@gmail.com';
        const password = '9388212koS';
        this._userService.signIn(email, password)
            .then(res => {
                console.log('res', res);
            })
            .catch(function (error) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('errorCode', errorCode);
                // ...
            });
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
                // ...
            });
    }

}
