import {
  HTTP_INTERCEPTORS,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url.includes('http')) {
      return next.handle(req);
    }

    const reqWithApi = req.clone({
      url: `${environment.baseUrl}v1${req.url}`,
    });
    return next.handle(reqWithApi);
  }
}
export const APIInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: APIInterceptor,
  multi: true,
};
