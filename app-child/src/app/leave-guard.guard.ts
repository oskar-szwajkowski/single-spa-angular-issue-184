import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveGuardGuard implements CanDeactivate<any> {
  canDeactivate(): boolean {
    console.log('Can leave guard activated from CHILD APP');
    return true;
  }
}
