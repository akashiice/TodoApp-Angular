import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/welcome-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMessageFromService: string
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    // this.hard.isUserLoggedIn();
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfuleResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessagePathVariable() {
    // this.hard.isUserLoggedIn();
    this.service.executeHelloWorldBeanServicePath(this.name).subscribe(
      response => this.handleSuccessfuleResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfuleResponse(response) {
    this.welcomeMessageFromService = response.message;
  }
  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;
  }
}
