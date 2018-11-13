import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import SETTINGS from '../../app.settings'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepting request', req)
        if (req.url !== SETTINGS.CLOUDINARY.URL && req.url.indexOf('auth') === -1)
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`,
                },
            });

        return next.handle(req);
    }
}