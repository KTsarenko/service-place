import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './features/auth/auth.component';

import {UserService} from './core/services/user.service';
import {fbService} from './core/services/fb.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SimpleNotificationsModule} from 'angular2-notifications';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    // { path: '', component: HomeComponent},
    { path: 'home/auth', component: AuthComponent},
    { path: 'home', loadChildren: 'app/features/root/root.module#RootModule' },
    { path: '**', redirectTo: ''}
];

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        SimpleNotificationsModule.forRoot()
    ],
    providers: [UserService, fbService],
    bootstrap: [AppComponent]
})
export class AppModule { }
