import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { Recipe } from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-book-list',
  templateUrl: './recipe-book-list.component.html',
  styleUrls: ['./recipe-book-list.component.css']
})
export class RecipeBookListComponent implements OnInit, OnDestroy {

  public recipes: Recipe[] = []
  public subscription: Subscription

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged.subscribe((updatedRecipes: Recipe[]) => {
      this.recipes = updatedRecipes
    })
    this.recipes = this.recipeService.getRecipes()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
