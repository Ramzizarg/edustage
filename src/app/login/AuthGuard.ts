import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
<<<<<<< HEAD
import { AuthService } from './AuthService';
=======
import {AuthService} from "./AuthService";
>>>>>>> 1c30bd43 (new)

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

<<<<<<< HEAD
  canActivate(next: ActivatedRouteSnapshot): boolean {
=======
  canActivate(
    next: ActivatedRouteSnapshot): boolean {
>>>>>>> 1c30bd43 (new)
    const userRole = this.authService.getRole();

    if (!userRole) {
      this.router.navigate(['/login']);
      return false;
    }

    const allowedRoles = next.data.roles as Array<string>;
    if (allowedRoles && allowedRoles.includes(userRole)) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
