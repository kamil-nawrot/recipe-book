import { Action } from "@ngrx/store";
import { Recipe } from "../recipe.model";

export const SET_RECIPES = "SET_RECIPES"
export const FETCH_RECIPES = "FETCH_RECIPES"
export const ADD_RECIPE = "ADD_RECIPE"
export const DELETE_RECIPE = "DELETE_RECIPE"
export const UPDATE_RECIPE = "UPDATE_RECIPE"

export class SetRecipes implements Action {
  readonly type = SET_RECIPES
  constructor(public payload: Recipe[]) {
  }
}

export class FetchRecipes implements Action {
  readonly type = FETCH_RECIPES
}
