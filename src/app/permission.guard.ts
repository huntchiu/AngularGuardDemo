import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const userPermissions = this.authService.getUserPermissions();
    if (!userPermissions.includes('edit_profile')) {
      this.router.navigate(['/unauthorized']);
      return false;
    }
    return true;
  }
}
