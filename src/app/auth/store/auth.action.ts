import { Action } from "@ngrx/store";

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const LOGIN_STARTED = "LOGIN_STARTED"
export const LOGIN_FAILED = "LOGIN_FAILED"
export const SIGNUP = "SIGNUP"
export const SIGNUP_STARTED = "SIGNUP_STARTED"

export class LoginAction implements Action {
  readonly type = LOGIN
  constructor(public payload: { email: string, userId: string, token: string, expirationDate: Date}) { }
}

export class LogoutAction implements Action {
  readonly type = LOGOUT
}

export class LoginStarted implements Action {
  readonly type = LOGIN_STARTED
  constructor(public payload: { email: string, password: string }) { }
}

export class LoginFailed implements Action {
  readonly type = LOGIN_FAILED
  constructor(public payload: string) {
  }
}

export class SignupStarted implements Action {
  readonly type = SIGNUP_STARTED
  constructor(public payload: { email: string, password: string }) { }
}

export type AuthActions = LoginAction | LogoutAction | LoginStarted | LoginFailed | SignupStarted
