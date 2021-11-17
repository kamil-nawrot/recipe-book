import { ActionReducerMap } from "@ngrx/store";
import { AuthState } from "../auth/store/auth.reducer";
import { RecipeBookState } from "../recipe-book/store/recipe-book.reducer";
import { ShoppingListState } from "../shopping-list/store/shopping-list.reducer";

import * as fromShoppingList from "../shopping-list/store/shopping-list.reducer"
import * as fromRecipeBook from "../recipe-book/store/recipe-book.reducer"
import * as fromAuth from "../auth/store/auth.reducer"

export interface AppState {
  shoppingList: ShoppingListState,
  recipeBook: RecipeBookState
  auth: AuthState
}

export const appReducer: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  recipeBook: fromRecipeBook.recipeBookReducer,
  auth: fromAuth.authReducer
}
