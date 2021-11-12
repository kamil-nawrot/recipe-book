import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/models/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>()

  private recipes: Recipe[] = []

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes ? this.recipes.slice() : []
  }

  getRecipeById(id: number): Recipe {
    return this.recipes.filter(recipe => recipe.id === id)[0]
  }


  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsFromRecipe(ingredients)
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
