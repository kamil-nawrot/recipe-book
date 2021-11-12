import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Data} from "@angular/router";
import {DataStorageService} from "../shared/data-storage.service";
import {AuthService} from "../auth/auth.service"
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  collapse = true
  @Output() pageChange = new EventEmitter<string>()
  authSub$: Subscription
  isAuthenticated = false

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authSub$ = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user
    })
  }

  onSaveData() {
    this.dataStorageService.saveRecipes()
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe()
  }

  ngOnDestroy() {
    this.authSub$.unsubscribe()
  }
}
