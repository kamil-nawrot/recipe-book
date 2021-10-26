import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/models/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient("flour", 200, "g"),
    new Ingredient("eggs", 4, "pcs")
  ]

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.getIngredients())
  }

  constructor() { }
}
