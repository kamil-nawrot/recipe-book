import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs/operators";
import { Recipe } from "../recipe.model";
import * as RecipeBookActions from "./recipe-book.actions"

@Injectable()
export class RecipeBookEffects {

  constructor(private actions$: Actions, private http: HttpClient) { }

  fetchRecipes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RecipeBookActions.FETCH_RECIPES),
      switchMap(action => {
        return this.http.get<Recipe[]>(
          "https://ng-complete-course-recipe-book-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
        )
      }),
      map((recipes: Recipe[]) => {
        return recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
        })
      }),
      map((recipes: Recipe[]) => {
        return new RecipeBookActions.SetRecipes(recipes)
      })
    )
  })
}
