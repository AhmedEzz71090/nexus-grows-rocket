import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { CredentialsService } from '@app/auth';

/**
 * Prefixes all requests not starting with `http[s]` with `environment.serverUrl`.
 */
@Injectable({
  providedIn: 'root',
})
export class ApiPrefixInterceptor implements HttpInterceptor {
  constructor(private credentials: CredentialsService) {}
  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   if (!/^(http|https):/i.test(request.url)) {
  //     request = request.clone({ url: environment.serverUrl + request.url });
  //   }
  //   return next.handle(request);
  // }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.credentials.credentials ? this.credentials.credentials['idToken'] : '';
    if (token.length) {
      request = request.clone({
        url: environment.serverUrl + request.url,
        headers: request.headers
          .set('Authorization', `Bearer ${token}`)
          .set('Access-Control-Allow-Origin', '*')
          .set('Accept-Language', 'en'),
      });
      // if (this.translateService.currentLang === 'ar-SA') {
      //   request = request.clone({
      //     headers: request.headers.set('Accept-Language', 'ar')
      //   });
      // }
    }
    return next.handle(request);
  }
}
