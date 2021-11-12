import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { Observable } from 'rxjs';
import {AuthResponseData, AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true
  isLoading = false
  errorState = null

  auth$: Observable<AuthResponseData>

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(form: NgForm) {
    this.errorState = null
    this.isLoading = true
    const email = form.value.email
    const password = form.value.password
    if (!this.isLoginMode)
      this.auth$ = this.authService.signUp(email, password)
    else this.auth$ = this.authService.logIn(email, password)

    this.auth$.subscribe(response => {
      console.log(response)
      this.isLoading = false
      this.router.navigate(['/recipes'])
    }, error => {
      console.log(error)
      this.isLoading = false
      this.errorState = error
    })

    form.reset()
  }

}
