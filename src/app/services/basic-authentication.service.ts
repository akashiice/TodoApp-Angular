import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username, password) {
    if (username === "akash" && password === "pass") {
      sessionStorage.setItem('authenticatedUser', username)
      return true;
    } else {
      return false;
    }
  }

  executeAuthenticationService(username, password) {
    // console.log(this.http.get("http://localhost:8080/basicauth"));
    let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password)
    let headers = new HttpHeaders({
      Authorization: basicAuthHeader
    })
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {
      headers
    }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username)
          return data;
        }
      )
    );
  }

  createBasicAuthenticationHeader() {
    let username = 'user'
    let password = 'password'
    let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password)
    return basicAuthHeader;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('authenticatedUser')
  }

}

export class AuthenticationBean {
  constructor(public message: String) {

  }
}
