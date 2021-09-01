import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor() { }

  canActivate(): boolean | Observable<boolean> {
    // based on loginStatus of loginService guard the components
  }
}
