import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParamInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedReq = req.clone({
      setParams: { icode: environment.iCode }
    })
    return next.handle(modifiedReq);
  }
}
