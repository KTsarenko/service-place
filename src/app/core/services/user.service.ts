import {Injectable} from '@angular/core';
import {fbService} from './fb.service';

@Injectable()
export class UserService {

    constructor(private _fb: fbService) {
    }


    public signUp(email, password) {
        return this._fb.signUp(email, password);
    }

    public signIn(email, password) {
        return this._fb.signIn(email, password);
    }

    public logout() {
        return this._fb.logout();
    }

    public setProfile(data, uid) {
      return this._fb.setProfile(data, uid);
    }
}
