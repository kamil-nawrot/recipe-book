import {EventEmitter, Injectable} from '@angular/core';
import { Store } from "@ngrx/store";
import { AddIngredients } from "../shopping-list/store/shopping-list.action";
import { AppState } from "../store/app.reducer";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/models/ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>()

  private recipes: Recipe[] = []

  constructor(private store: Store<AppState>) { }

  getRecipes() {
    return this.recipes ? this.recipes.slice() : []
  }

  getRecipeById(id: number): Recipe {
    return this.recipes.filter(recipe => recipe.id === id)[0]
  }


  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.store.dispatch(new AddIngredients(ingredients))
    // this.shoppingListService.addIngredientsFromRecipe(ingredients)
  }

  addRecipe(recipe: Recipe) {
      this.recipes.push(recipe)
      this.recipesChanged.next(this.recipes)
  }

  updateRecipe(index: number, recipe: Recipe) {
      const arrayId = this.recipes.indexOf(this.recipes.filter(recipe => recipe.id === index)[0])
      this.recipes[arrayId] = recipe
      this.recipesChanged.next(this.recipes)
  }

  deleteRecipe(index: number) {
      const arrayId = this.recipes.indexOf(this.recipes.filter(recipe => recipe.id === index)[0])
      this.recipes.splice(arrayId, 1)
      this.recipesChanged.next(this.recipes)
  }

  setRecipes(newRecipes: Recipe[]) {
    this.recipes = newRecipes
    this.recipesChanged.next(this.recipes)
  }

}
