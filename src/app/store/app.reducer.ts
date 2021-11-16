import { ActionReducerMap } from "@ngrx/store";
import { AuthState } from "../auth/store/auth.reducer";
import { ShoppingListState } from "../shopping-list/store/shopping-list.reducer";

import * as fromShoppingList from "../shopping-list/store/shopping-list.reducer"
import * as fromAuth from "../auth/store/auth.reducer"

export interface AppState {
  shoppingList: ShoppingListState,
  auth: AuthState
}

export const appReducer: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  auth: fromAuth.authReducer
}
