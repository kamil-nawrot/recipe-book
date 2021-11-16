import { User } from "../user.model";
import * as fromAuth from "./auth.action"

export interface AuthState {
  user: User
}

const initialState: AuthState = {
  user: null
}

export function authReducer(state = initialState, action: fromAuth.AuthActions) {
  switch (action.type) {
    case fromAuth.LOGIN:
      const newUser = new User(action.payload.email, action.payload.userId, action.payload.token, action.payload.expirationDate)
      return { ...state, user: newUser }
    case fromAuth.LOGOUT:
      return { ... state, user: null }
    default:
      return state
  }
}
