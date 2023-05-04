import {
  HTTP_INTERCEPTORS,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url.includes('http')) {
      return next.handle(req);
    }

    const reqWithApi = req.clone({
      url: `/api/v1${req.url}`,
    });
    return next.handle(reqWithApi);
  }
}
export const APIInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: APIInterceptor,
  multi: true,
};
