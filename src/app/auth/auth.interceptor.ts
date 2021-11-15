import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";
import {userError} from "@angular/compiler-cli/src/transformers/util";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const user = this.authService.user.value

    if (req.method === "GET" && user) {
      let modifiedReq = req.clone({
        params: req.params.append("auth", user.token)
      })

      return next.handle(modifiedReq);
    }

    return next.handle(req)
  }
}
