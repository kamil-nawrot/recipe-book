import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Data} from "@angular/router";
import {DataStorageService} from "../shared/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapse = true
  @Output() pageChange = new EventEmitter<string>()

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

  onSaveData() {
    this.dataStorageService.saveRecipes()
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe()
  }
}
