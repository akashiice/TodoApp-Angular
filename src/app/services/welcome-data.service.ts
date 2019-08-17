import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<HelloWorldBean>(`http://localhost:8080/helloWorldBean/${name}`);
  }

}
