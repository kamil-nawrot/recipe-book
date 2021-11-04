import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/models/ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  // ingredientsChanged = new EventEmitter<Ingredient[]>()
  ingredientsChanged = new Subject<Ingredient[]>()

  startedEditing = new Subject<number>()

  private ingredients: Ingredient[] = [
    new Ingredient("flour", 200, "g"),
    new Ingredient("eggs", 4, "pcs")
  ]

  getIngredients() {
    return this.ingredients.slice()
  }

  getIngredientById(index: number) {
    return this.ingredients[index]
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.getIngredients())
  }

  addIngredientsFromRecipe(ingredients: Ingredient[]) {
    this.ingredients = this.ingredients.concat(ingredients)
    this.ingredientsChanged.next(this.getIngredients())
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1)
    return this.ingredientsChanged.next(this.ingredients.slice())
  }

  constructor() { }
}
