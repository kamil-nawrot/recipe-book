import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/models/ingredient.model";
import {LoggingService} from "../../shared/logging.service";

@Component({
  selector: 'app-shopping-list-input',
  templateUrl: './shopping-list-input.component.html',
  styleUrls: ['./shopping-list-input.component.css']
})
export class ShoppingListInputComponent implements OnInit {

  // @ts-ignore
  @ViewChild('nameInput') nameInput: ElementRef
  // @ts-ignore
  @ViewChild('amountInput') amountInput: ElementRef
  // @ts-ignore
  @ViewChild('unitInput') unitInput: ElementRef

  @Output() addIngredient = new EventEmitter<Ingredient>()

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    const ingredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value,
      this.unitInput.nativeElement.value
    )

    this.addIngredient.emit(ingredient)
    this.loggingService.logNewIngredient(ingredient)
  }

}
