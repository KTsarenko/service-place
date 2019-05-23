import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/internal/operators';

declare const firebase: any;

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return new Observable<boolean>(observer => {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    console.log('Already logined, redirecting');
                    observer.next(true);
                    observer.complete();
                } else {
                    // No user is signed in.
                    console.log('Not logined');
                    this.router.navigateByUrl('/auth');
                    observer.next(false);
                    observer.complete();
                }
            });
        }).pipe(first());
    }

}
