import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constant';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }


  executeAuthenticationService(username, password) {
    // console.log(this.http.get("http://localhost:8080/basicauth"));
    let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password)
    let headers = new HttpHeaders({
      Authorization: basicAuthHeader
    })
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, {
      headers
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(TOKEN, username)
          sessionStorage.setItem(AUTHENTICATED_USER, basicAuthHeader)
          return data;
        }
      )
    );
  }

getAuthenticatedUser(){
  return sessionStorage.getItem('authenticatedUser')
}

getAuthenticatedToken(){
  return sessionStorage.getItem('token')
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
