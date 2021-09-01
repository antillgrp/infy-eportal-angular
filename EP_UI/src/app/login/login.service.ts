import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = 'http://localhost:1020/login';
  // declare a BehaviorSubject to store username and password value
  loggedUser: BehaviorSubject<Login> = new BehaviorSubject<Login>(
    {
      username: null,
      password: null,
      authenticated : false
    }
  );

  // login: Login;
  // loginStatus: boolean;

  constructor(
    private http: HttpClient
  ) { }

  tryAuthenticate(login: Login): Observable<Login> {
    return  this.http
            .post<any>(this.loginUrl, login)
            .pipe(
              map(
                authObj => {
                  console.log("auth"+JSON.stringify(authObj));
                  login.authenticated = authObj.message;
                  this.loggedUser.next(login);
                  return login;
                }
              )
            );
  }

  logout(){
    this.loggedUser.next(
      {
        username: null,
        password: null,
        authenticated : false
      }
    );
  }
}
