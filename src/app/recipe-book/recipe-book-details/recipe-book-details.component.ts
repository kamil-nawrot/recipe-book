import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-book-details',
  templateUrl: './recipe-book-details.component.html',
  styleUrls: ['./recipe-book-details.component.css']
})
export class RecipeBookDetailsComponent implements OnInit {

  @Input() recipe: Recipe | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
