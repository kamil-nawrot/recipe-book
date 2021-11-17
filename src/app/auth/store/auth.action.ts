import { Action } from "@ngrx/store";

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const LOGIN_STARTED = "LOGIN_STARTED"
export const LOGIN_FAILED = "LOGIN_FAILED"
export const SIGNUP = "SIGNUP"
export const SIGNUP_STARTED = "SIGNUP_STARTED"
export const CLEAR_ERROR = "CLEAR_ERROR"
export const AUTO_LOGIN = "AUTO_LOGIN"
export const AUTO_LOGOUT = "AUTO_LOGOUT"
export const NOOP_ACTION = "NOOP_ACTION"

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

export class ClearError implements Action {
  readonly type = CLEAR_ERROR
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN
}

export class AutoLogout implements Action {
  readonly type = AUTO_LOGOUT
}

export class NoopAction implements Action {
  readonly type = NOOP_ACTION
}

export type AuthActions = LoginAction | LogoutAction | LoginStarted | LoginFailed | SignupStarted | ClearError | AutoLogin | AutoLogout | NoopAction
