import { Ingredient } from "../../shared/models/ingredient.model";
import {
  ADD_INGREDIENT,
  ADD_INGREDIENTS,
  AddIngredient,
  AddIngredients,
  DELETE_INGREDIENT,
  DeleteIngredient, START_EDIT, StartEdit, STOP_EDIT, StopEdit,
  UPDATE_INGREDIENT,
  UpdateIngredient,
} from "./shopping-list.action";

export interface ShoppingListState {
  ingredients: Ingredient[],
  editedIngredient: Ingredient,
  editedIngredientIndex: number
}

const initialState: ShoppingListState = {
  ingredients: [
    new Ingredient("flour", 200, "g"),
    new Ingredient("eggs", 7, "pcs")
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
}

export function shoppingListReducer(state = initialState, action: shoppingListActions) {
  switch(action.type) {
    case ADD_INGREDIENT:
      return { ...state, ingredients: [ ...state.ingredients, action.payload ] }
    case ADD_INGREDIENTS:
      return { ...state, ingredients: [ ...state.ingredients, ...action.payload] }
    case UPDATE_INGREDIENT:
      const ingredientToUpdate = state.ingredients[state.editedIngredientIndex]
      const updatedIngredient = {
        ...ingredientToUpdate,
        ...action.payload
      }
      const updatedIngredients = [ ...state.ingredients ]
      updatedIngredients[state.editedIngredientIndex] = updatedIngredient
      return {
        ...state,
        ingredients: updatedIngredients,
        editedIngredientIndex: -1,
        editedIngredient: null
      }
    case DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((i, index) => index !== state.editedIngredientIndex),
        editedIngredientIndex: -1,
        editedIngredient: null
      }
    case START_EDIT:
      return { ...state, editedIngredientIndex: action.payload, editedIngredient: { ...state.ingredients[action.payload] } }
    case STOP_EDIT:
      return { ...state, editedIngredientIndex: -1, editedIngredient: null }
    default:
      return state
  }
}

export type shoppingListActions = AddIngredient | AddIngredients | UpdateIngredient | DeleteIngredient | StartEdit | StopEdit
