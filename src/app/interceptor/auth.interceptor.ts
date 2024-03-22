import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('jwtToken');

    let modifiedRequest = request.clone({
      url: 'http://localhost:3000/' + request.url,
    });

    if (token) {
      modifiedRequest = modifiedRequest.clone({
        headers: request.headers.append('Authorization', `Bearer ${token}`),
      });
    }

    return next.handle(modifiedRequest);
  }
}
