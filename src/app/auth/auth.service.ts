import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { environment } from "../../environments/environment";
import { catchError, tap } from "rxjs/operators";
import { BehaviorSubject, Observable, Subject, throwError } from "rxjs";
import { AppState } from "../store/app.reducer";
import { LoginAction, LogoutAction } from "./store/auth.action";
import { User } from "./user.model";
import { Router } from "@angular/router";

export interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // public user: BehaviorSubject<User> = new BehaviorSubject<User>(null)
  tokenExpirationTimer: any

  constructor(private http: HttpClient, private router: Router, private store: Store<AppState>) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
        catchError(this.handleError),
        tap(response => this.handleAuth(response.email, response.localId, response.idToken, +response.expiresIn))
    )
  }

  logIn(email: string, password: string){
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
        catchError(this.handleError),
        tap(response => this.handleAuth(response.email, response.localId, response.idToken, +response.expiresIn))
    )
  }

  public logOut() {
    this.store.dispatch(new LogoutAction())
    this.router.navigate(["auth"])
    localStorage.removeItem("USER")
    if(this.tokenExpirationTimer) clearTimeout(this.tokenExpirationTimer)
  }

  autoLogin() {
    const userData = JSON.parse(localStorage.getItem("USER"))
    if(!userData) return
    else {
      const user: User = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate))
      if (user.token) {
        this.autoLogout(user.tokenExpirationDate.getTime() - new Date().getTime())
        this.store.dispatch(new LoginAction({
          email: userData.email,
          userId: userData.id,
          token: userData._token,
          expirationDate: userData._tokenExpirationDate}))
      }
    }
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logOut()
    }, expirationDuration)
  }

  private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + (expiresIn * 1000))
    const user = new User(email, userId, token, expirationDate)

    this.store.dispatch(new LoginAction({ email: email, userId: userId, token: token, expirationDate: expirationDate }))
    this.autoLogout(expiresIn * 1000)
    localStorage.setItem("USER", JSON.stringify(user))
  }

  private handleError(errorRes: HttpErrorResponse): Observable<never> {
    let errorState
    switch(errorRes.error.error.message) {
      case "EMAIL_EXISTS":
        errorState = "The email address is already in use by another account."
        break
      case "OPERATION_NOT_ALLOWED":
        errorState = "Password sign-in is disabled for this project."
        break
      case "TOO_MANY_ATTEMPTS_TRY_LATER":
        errorState = "We have blocked all requests from this device due to unusual activity. Try again later."
        break
      case "EMAIL_NOT_FOUND":
        errorState = "There is no user record corresponding to this identifier. The user may have been deleted."
        break
      case "INVALID_PASSWORD":
        errorState = "The password is invalid or the user does not have a password."
        break
      case "USER_DISABLED":
        errorState = "The user account has been disabled by an administrator."
        break
      default: errorState = "An unexpected error occurred!"
    }
    return throwError(errorState)
  }
}
