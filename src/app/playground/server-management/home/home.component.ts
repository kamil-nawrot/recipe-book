import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn = false

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers() {
    this.router.navigate(["/servers"])
  }

  toggleLoginStatus() {
    if(this.isLoggedIn) {
      this.authService.logOut()
    }
    else this.authService.logIn()
    this.isLoggedIn = !this.isLoggedIn
  }

}
