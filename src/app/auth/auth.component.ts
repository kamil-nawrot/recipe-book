import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import {AuthResponseData, AuthService} from "./auth.service";
import {Router} from "@angular/router";
import * as fromApp from "../store/app.reducer"
import * as AuthActions from "./store/auth.action";

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

  constructor(private authService: AuthService, private router: Router, private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.select("auth").subscribe(authState => {
      this.isLoading = authState.loading
      this.errorState = authState.authError
    })
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
    else
      this.store.dispatch(new AuthActions.LoginStarted({
        email: email,
        password: password
      }))
      // this.auth$ = this.authService.logIn(email, password)

    // this.auth$.subscribe(response => {
    //   console.log(response)
    //   this.isLoading = false
    //   this.router.navigate(['/recipes'])
    // }, error => {
    //   this.isLoading = false
    //   this.errorState = error
    // })

    form.reset()
  }

}
