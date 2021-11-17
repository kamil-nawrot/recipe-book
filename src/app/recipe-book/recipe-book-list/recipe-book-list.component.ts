import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { Store } from "@ngrx/store";
import { Recipe } from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";
import * as fromApp from "../../store/app.reducer"

@Component({
  selector: 'app-recipe-book-list',
  templateUrl: './recipe-book-list.component.html',
  styleUrls: ['./recipe-book-list.component.css']
})
export class RecipeBookListComponent implements OnInit, OnDestroy {

  public recipes: Recipe[] = []
  public subscription: Subscription

  constructor(private recipeService: RecipeService, private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.select("recipeBook").subscribe(recipeBookState => {
      this.recipes = recipeBookState.recipes
    })
    // this.subscription = this.recipeService.recipesChanged.subscribe((updatedRecipes: Recipe[]) => {
    //   this.recipes = updatedRecipes
    // })
    // this.recipes = this.recipeService.getRecipes()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
