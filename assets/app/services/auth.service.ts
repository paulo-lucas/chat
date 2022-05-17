import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient as Http, HttpHeaders as Headers } from "@angular/common/http";
import { User } from "../models/user.model";
import 'rxjs/Rx';

const myHeaders = new Headers({ 'Content-Type': 'application/json' });

@Injectable()
export class AuthService {
    constructor(private http: Http) { }

    signUpUser(user: User) {
        const baseUrl = 'http://localhost:3000/autenticacao/signup';
        const bodyReq = JSON.stringify(user);

        return this.http.post(baseUrl, bodyReq, { headers: myHeaders })
    }

    signInUser(user: User) {
        const baseUrl = 'http://localhost:3000/autenticacao/signin';
        const bodyReq = JSON.stringify(user);

        return this.http.post(baseUrl, bodyReq, { headers: myHeaders })
    }
}