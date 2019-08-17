import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../services/hard-coded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'akash'
  password = ''
  errorMessage = 'Invalid credentials'
  invalidLogin = false
  constructor(private router: Router, private hardCodedAuthentication: HardCodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.hardCodedAuthentication.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
