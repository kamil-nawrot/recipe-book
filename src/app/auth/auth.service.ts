import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs/operators";
import {Observable, Subject, throwError} from "rxjs";
import {User} from "./user.model";

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

  public user: Subject<User> = new Subject<User>()

  constructor(private http: HttpClient) { }

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

  private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + (expiresIn * 1000))
    const user = new User(email, userId, token, expirationDate)

    this.user.next(user)
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
