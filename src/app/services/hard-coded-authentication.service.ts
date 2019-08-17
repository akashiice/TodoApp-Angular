import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    if(username==="akash" && password==="pass"){
      sessionStorage.setItem('authenticatedUser', username)
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logOut(){
    sessionStorage.removeItem('authenticatedUser')
  }

}
