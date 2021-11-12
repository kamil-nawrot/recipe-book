import {Injectable} from '@angular/core';
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from "rxjs/operators";

@Injectable()
export class LoggingInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Request is on its way")
    return next.handle(request).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response) {
          console.log("Response arrived:")
          console.log(event.body)
        }
      })
    );
  }
}
