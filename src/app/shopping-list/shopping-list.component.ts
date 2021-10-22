import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/models/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredients: Ingredient[] = [
    new Ingredient("flour", 200, "g"),
    new Ingredient("eggs", 4, "pcs")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
