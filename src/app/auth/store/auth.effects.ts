import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { of, throwError } from "rxjs";
import { catchError, exhaustMap, map, switchMap, tap } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { AuthResponseData } from "../auth.service";
import * as AuthActions from "./auth.action"

@Injectable()
export class AuthEffects {

  authLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.LOGIN_STARTED),
      exhaustMap((action: AuthActions.LoginStarted) => {
        console.log(action)
        return this.http.post<AuthResponseData>(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
          {
            email: action.payload.email,
            password: action.payload.password,
            returnSecureToken: true
          })
          .pipe(
            map(authResponse => {
              return new AuthActions.LoginAction({
                email: authResponse.email,
                userId: authResponse.localId,
                token: authResponse.idToken,
                expirationDate: new Date(new Date().getTime() - (+authResponse * 1000))
              })
            }),
            catchError(errorRes => {
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
              return of(new AuthActions.LoginFailed(errorState))
            })
          );
      })
    );
  }, { dispatch: true })

  authSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.LOGIN),
      tap(() => {
        this.router.navigate(["recipes"])
      })
    )
  }, { dispatch: false })

  authSignup$ = createEffect(() => {
    return this.actions$.pipe()
  })


  constructor(private actions$: Actions, private http: HttpClient, private router: Router) {}

}
