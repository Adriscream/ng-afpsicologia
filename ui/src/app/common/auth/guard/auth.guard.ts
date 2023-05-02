import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';

import { AuthService } from '../auth.service';

export const AuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (!authService.isLoggedIn) {
    return authService
      .login()
      .pipe(map((user) => !!user || router.parseUrl('/landing')));
  }

  return true;
};
