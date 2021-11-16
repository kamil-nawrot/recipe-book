import { User } from "../user.model";
import * as fromAuth from "./auth.action"

export interface AuthState {
  user: User,
  authError: string,
  loading: boolean
}

const initialState: AuthState = {
  user: null,
  authError: null,
  loading: false
}

export function authReducer(state = initialState, action: fromAuth.AuthActions) {
  switch (action.type) {
    case fromAuth.LOGIN:
      const newUser = new User(action.payload.email, action.payload.userId, action.payload.token, action.payload.expirationDate)
      return { ...state, user: newUser, authError: null, loading: false }
    case fromAuth.LOGOUT:
      return { ... state, user: null }
    case fromAuth.LOGIN_STARTED:
      return { ...state, authError: null, loading: true }
    case fromAuth.LOGIN_FAILED:
      return { ...state, user: null, authError: action.payload, loading: false }
    default:
      return state
  }
}
