import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-book-list',
  templateUrl: './recipe-book-list.component.html',
  styleUrls: ['./recipe-book-list.component.css']
})
export class RecipeBookListComponent implements OnInit {

  public recipes: Recipe[] = []

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes()
  }

}
