import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../recipe-book/recipe.service";
import {Recipe} from "../recipe-book/recipe.model";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  fetchRecipes() {
    return this.http.get<Recipe[]>(
      "https://ng-complete-course-recipe-book-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
    )
      .pipe(
        map(recipes => {
        return recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
        })
      }), tap(recipes => {
          this.recipeService.setRecipes(recipes)
        }))
  }

  saveRecipes() {
    this.http.put(
      "https://ng-complete-course-recipe-book-default-rtdb.europe-west1.firebasedatabase.app/recipes.json",
      this.recipeService.getRecipes()
    ).subscribe((response: Response) => {
      console.log(response)
    })
  }
}
