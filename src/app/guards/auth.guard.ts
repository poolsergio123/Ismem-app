import { LoginPageModule } from './../login/login.module';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginPage } from '../login/login.page';
import { AuthServiceService } from '../services/auth.service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(): boolean {

    if (this.authService.isLoggedIn()) {
      return true; // Permitir acceso si está autenticado
    } else {
      this.router.navigate(['/login']); // Redirigir al login si no está autenticado
      return false;
    }
  }
}
