import { Recipe } from "../recipe.model";
import { FetchRecipes, SET_RECIPES, SetRecipes } from "./recipe-book.actions";

export interface RecipeBookState {
  recipes: Recipe[]
}

const initialState: RecipeBookState = {
  recipes: []
}

export function recipeBookReducer(state = initialState, action: RecipeBookActions) {
  switch (action.type) {
    case SET_RECIPES:
      return { ... state, recipes: [...action.payload] }
    default:
      return state
  }
}

export type RecipeBookActions = SetRecipes | FetchRecipes
