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

  private recipes: Recipe[] = [
    new Recipe(
      1,
      "Test Recipe",
      "Scrambled Eggs on Water",
      "https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg",
      [
        new Ingredient("bread", 1, "pcs"),
        new Ingredient("eggs", 5, "pcs"),
        new Ingredient("flour", 200, "g"),
        new Ingredient("water", 150, "ml")
      ]
    ),
    new Recipe(
      2,
      "Some Weird Vegetable Mix",
      "This is simply a test 222222",
      "https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg",
      [
        new Ingredient("tomatoes", 3, "pcs"),
        new Ingredient("cucumbers", 5, "pcs"),
        new Ingredient("flour", 200, "g"),
        new Ingredient("vinegar", 2, "tbs")
      ]
    )
  ]

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice()
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

}
