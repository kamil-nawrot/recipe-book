import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { of, throwError } from "rxjs";
import { catchError, exhaustMap, map, switchMap, tap } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { AuthResponseData, AuthService } from "../auth.service";
import { User } from "../user.model";
import { NoopAction } from "./auth.action";
import * as AuthActions from "./auth.action"

const handleAuth = (authResponse) => {
  const expirationDate = new Date(new Date().getTime() + (+authResponse.expiresIn * 1000))
  const user = new User(authResponse.email, authResponse.localId, authResponse.idToken, expirationDate)
  console.log("Test", user)
  localStorage.setItem("USER", JSON.stringify(user))
  return new AuthActions.LoginAction({
    email: authResponse.email,
    userId: authResponse.localId,
    token: authResponse.idToken,
    expirationDate: expirationDate
  })
}

const handleError = (errorRes) => {
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
}

@Injectable()
export class AuthEffects {

  authLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.LOGIN_STARTED),
      exhaustMap((action: AuthActions.LoginStarted) => {
        return this.http.post<AuthResponseData>(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
          {
            email: action.payload.email,
            password: action.payload.password,
            returnSecureToken: true
          })
          .pipe(
            tap(authResponse => {
              this.authService.setLogoutTimer(+authResponse.expiresIn * 1000)
            }),
            map(authResponse => {
              return handleAuth(authResponse)
            }),
            catchError((error: any) => {
              return handleError(error)
            })
          );
      })
    );
  }, { dispatch: true })

  authLoginRedirect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.LOGIN),
      tap(() => {
        console.log(this.router.url)
        if (this.router.url === "/auth")
          this.router.navigate(["/recipes"])
      })
    )
  }, { dispatch: false })

  authLogoutRedirect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.LOGOUT),
      tap(() => {
        this.router.navigate(["/auth"])
      })
    )
  }, { dispatch: false })

  authSignup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.SIGNUP_STARTED),
      switchMap((action: AuthActions.SignupStarted) => {
        return this.http.post<AuthResponseData>(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
          {
            email: action.payload.email,
            password: action.payload.password,
            returnSecureToken: true
          })
          .pipe(
            tap(authResponse => {
              this.authService.setLogoutTimer(+authResponse.expiresIn * 1000)
            }),
            map(authResponse => {
              return handleAuth(authResponse)
            }),
            catchError((error: any) => {
              return handleError(error)
            })
          )
      })
    )
  })

  authLogout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.LOGOUT),
      tap(() => {
        this.authService.clearLogoutTimer()
        // localStorage.removeItem("USER")
      })
    )
  }, { dispatch: false })

  authAutoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.AUTO_LOGIN),
      map(() => {
          const userData: {
            email: string,
            id: string,
            _token: string,
            _tokenExpirationDate: string
          } = JSON.parse(localStorage.getItem("USER"))
          if (!userData) {
            return new NoopAction()
          }
          const user = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate))
        console.log(user.token)
          if (user.token) {
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime()
            // this.authService.setLogoutTimer(+expirationDuration * 1000)
            return new AuthActions.LoginAction({
              email: user.email,
              userId: user.id,
              token: user.token,
              expirationDate: user.tokenExpirationDate
            })
          }
          else return new NoopAction()
        }
      )
    )
  })


  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private currentRoute: ActivatedRoute,
    private authService: AuthService
  ) {}

}
