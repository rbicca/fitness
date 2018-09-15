import { Subject } from 'rxjs';

import { User } from "./user.model";
import { AuthData } from "./auth-data.model";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    authChange = new Subject<boolean>();
    private user: User;

    constructor (private router: Router){}

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
        this.authSuccesfully();
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
        this.authSuccesfully();
    }

    logout() {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }

    private authSuccesfully() {
        this.authChange.next(true);
        this.router.navigate(['/training']);
    }

    getUser() {
        return { ...this.user };    //Crate a new object, breaking the reference
    }

    isAuth() {
        return this.user != null;
    }

}