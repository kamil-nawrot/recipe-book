import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Observable, of } from 'rxjs';
import { take } from "rxjs/operators";
import { AppState } from "../store/app.reducer";
import {Recipe} from "./recipe.model";
import {DataStorageService} from "../shared/data-storage.service";
import {RecipeService} from "./recipe.service";

import * as RecipeBookActions from "../recipe-book/store/recipe-book.actions"

@Injectable({
  providedIn: 'root'
})
export class RecipesResolver implements Resolve<Recipe[]> {

  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
    private store: Store<AppState>,
    private actions$: Actions
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // const recipes = this.recipeService.getRecipes()
    // if (recipes.length < 1) {
      this.store.dispatch(new RecipeBookActions.FetchRecipes())
      return this.actions$.pipe(
        ofType(RecipeBookActions.SET_RECIPES),
        take(1)
      )
      // return this.dataStorageService.fetchRecipes()
    }
    // else return recipes
}
