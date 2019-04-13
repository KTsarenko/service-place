import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './features/auth/auth.component';

import {UserService} from "./core/services/user.service";
import {fbService} from './core/services/fb.service';
import { CreateCustomersComponent } from './features/create-customers/create-customers.component';
import { CreateMastersComponent } from './features/create-masters/create-masters.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    // { path: '', component: HomeComponent},
    { path: 'login', component: AuthComponent},
    { path: 'home', loadChildren: 'app/features/root/root.module#RootModule' },
    { path: '**', redirectTo: ''}
];

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [UserService, fbService],
    bootstrap: [AppComponent]
})
export class AppModule { }
