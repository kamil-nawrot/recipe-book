import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Store } from "@ngrx/store";
import {RecipeService} from "../recipe-book/recipe.service";
import {Recipe} from "../recipe-book/recipe.model";
import {exhaustMap, map, take, tap} from "rxjs/operators";
import {AuthService} from "../auth/auth.service"
import {User} from "../auth/user.model";
import * as fromApp from "../store/app.reducer"

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) { }

  fetchRecipes() {
    return this.store.select("auth").pipe(
      take(1),
      map(authState => {
        return authState.user
      }),
      exhaustMap((user: User) => {
        return this.http.get<Recipe[]>(
          "https://ng-complete-course-recipe-book-default-rtdb.europe-west1.firebasedatabase.app/recipes.json",
          {
            params: new HttpParams().set("auth", user.token)
          }
        )
      }),
      map((recipes: Recipe[]) => {
        return recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
        })
      }),
      tap((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes)
      })
    )
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
