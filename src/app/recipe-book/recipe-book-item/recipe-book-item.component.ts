import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-book-item',
  templateUrl: './recipe-book-item.component.html',
  styleUrls: ['./recipe-book-item.component.css']
})
export class RecipeBookItemComponent implements OnInit {

  // @ts-ignore
  @Input() recipe: Recipe

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelectRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe)
  }

}
