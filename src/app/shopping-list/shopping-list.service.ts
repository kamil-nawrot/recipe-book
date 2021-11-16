import { EventEmitter, Injectable, OnInit } from '@angular/core';
import {Ingredient} from "../shared/models/ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService implements OnInit {

  ingredientsChanged = new Subject<Ingredient[]>()
  startedEditing = new Subject<number>()
  private ingredients: Ingredient[]

  // constructor(private store: Store<AppState>) { }
  //
  ngOnInit() {
    // this.store.select("shoppingList").subscribe(shoppingListState => {
    //   this.ingredients = shoppingListState.ingredients
    // })
  }
  //
  // getIngredients() {
  //   return this.ingredients.slice()
  // }
  //
  // getIngredientById(index: number) {
  //   let ingredients: Ingredient[]
  //   this.store.select("shoppingList").subscribe(shoppingListState => {
  //     ingredients = shoppingListState.ingredients
  //   })
  //   return ingredients[index]
  // }
  //
  // addIngredient(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient)
  //   this.ingredientsChanged.next(this.getIngredients())
  // }
  //
  // addIngredientsFromRecipe(ingredients: Ingredient[]) {
  //   this.ingredients = this.ingredients.concat(ingredients)
  //   this.ingredientsChanged.next(this.getIngredients())
  // }
  //
  // updateIngredient(index: number, newIngredient: Ingredient) {
  //   this.ingredients[index] = newIngredient
  //   this.ingredientsChanged.next(this.ingredients.slice())
  // }
  //
  // deleteIngredient(index: number) {
  //   this.ingredients.splice(index, 1)
  //   return this.ingredientsChanged.next(this.ingredients.slice())
  // }
}
