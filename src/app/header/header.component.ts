import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapse = true
  @Output() pageChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onRecipesPageOpen() {
    this.pageChange.emit('recipes')
  }

  onShoppingListPageOpen() {
    this.pageChange.emit('shopping-list')
  }

}
