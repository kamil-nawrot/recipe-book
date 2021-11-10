import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/models/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {animate, group, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations: [
    trigger("listItem", [
      transition(":enter", group([
        style({
          opacity: 0,
          transform: "translateX(-100px)"
        }),
        animate(300, style({
          opacity: 1
        })),
        animate(500, style({
          transform: "translateX(0)"
        }))
      ])),
      transition(":leave", group([
        animate(300, style({
          opacity: 0,
          color: "red"
        })),
        animate(500, style({
          transform: "translateX(100px)"
        }))
      ]))
    ])
  ]
})
export class ShoppingListComponent implements OnInit {

  public ingredients: Ingredient[] = []

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()
    this.shoppingListService.ingredientsChanged.subscribe((updatedIngredients: Ingredient[]) => {
      this.ingredients = updatedIngredients
    })
  }

  onEditItem(i: number) {
    this.shoppingListService.startedEditing.next(i)
  }

}
