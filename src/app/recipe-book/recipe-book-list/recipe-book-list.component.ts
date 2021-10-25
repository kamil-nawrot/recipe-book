import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-book-list',
  templateUrl: './recipe-book-list.component.html',
  styleUrls: ['./recipe-book-list.component.css']
})
export class RecipeBookListComponent implements OnInit {

  @Output() selectRecipe = new EventEmitter<Recipe>()

  public recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is simply a test", "https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg"),
    new Recipe("Secondddd Recipe", "This is simply a test 222222", "https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg")
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectRecipe.emit(recipe)
  }

}
