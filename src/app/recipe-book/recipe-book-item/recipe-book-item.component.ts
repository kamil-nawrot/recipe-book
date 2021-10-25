import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-book-item',
  templateUrl: './recipe-book-item.component.html',
  styleUrls: ['./recipe-book-item.component.css']
})
export class RecipeBookItemComponent implements OnInit {

  @Output() selectRecipe = new EventEmitter<Recipe>()

  // @ts-ignore
  @Input() recipe: Recipe

  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe() {
    this.selectRecipe.emit()
  }

}
