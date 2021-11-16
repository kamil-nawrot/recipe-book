import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpParams
} from '@angular/common/http';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { AppState } from "../store/app.reducer";
import {AuthService} from "./auth.service";
import {userError} from "@angular/compiler-cli/src/transformers/util";
import * as fromApp from "../store/app.reducer"

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private store: Store<AppState>) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let user
    this.store.select("auth").subscribe(authState => {
      user = authState.user
    })

    if (req.method === "GET" && user) {
      let modifiedReq = req.clone({
        params: req.params.append("auth", user.token)
      })

      return next.handle(modifiedReq);
    }

    return next.handle(req)
  }
}
