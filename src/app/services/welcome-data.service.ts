import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService(){
    // console.log(this.http.get("http://localhost:8080/helloWorldBean"));
    return this.http.get<HelloWorldBean>("http://localhost:8080/helloWorldBean");
  }

  executeHelloWorldBeanServicePath(name){
    // console.log(this.http.get("http://localhost:8080/helloWorldBean"));
    // let basicAuthHeaderString = this.createBasicAuthenticationHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/helloWorldBean/${name}`,{
      // headers
    });
  }

  // createBasicAuthenticationHeader(){
  //   let username = 'user'
  //   let password = 'password'
  //   let basicAuthHeader = 'Basic ' + window.btoa(username +':'+password)
  //   return basicAuthHeader;
  // }
}
