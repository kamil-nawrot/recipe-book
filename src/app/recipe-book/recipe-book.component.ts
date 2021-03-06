import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  // @ts-ignore
  selectedRecipe: Recipe

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe
  }

}
