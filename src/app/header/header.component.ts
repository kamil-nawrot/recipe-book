import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Data, Router} from "@angular/router";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import { FetchRecipes } from "../recipe-book/store/recipe-book.actions";
import {DataStorageService} from "../shared/data-storage.service";
import {AuthService} from "../auth/auth.service"
import {Subscription} from "rxjs";
import * as fromApp from "../store/app.reducer"
import * as AuthActions from "../auth/store/auth.action";

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

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private router: Router,
              private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.authSub$ = this.store.select("auth").pipe(map(authState => authState.user))
      .subscribe(user => {
        this.isAuthenticated = !!user
    })
  }

  onSaveData() {
    this.dataStorageService.saveRecipes()
  }

  onFetchData() {
    this.store.dispatch(new FetchRecipes())
    // this.dataStorageService.fetchRecipes().subscribe()
  }

  onLogOut() {
    // this.authService.logOut()
    this.store.dispatch(new AuthActions.LogoutAction())
  }

  ngOnDestroy() {
    this.authSub$.unsubscribe()
  }
}
