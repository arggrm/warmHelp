import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../auth/token.service';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environment/environment';

export const authGuard: CanActivateFn = async (route, state) => {

  const tokenService = inject(TokenService);
  const router = inject(Router);
  const http = inject(HttpClient);

  const accessToken = tokenService.getAccessToken();
  const refreshToken = tokenService.getRefreshToken();

  if (!accessToken) {
    router.navigate(['login']);
    return false;
  }

  try {
    const response: any = await firstValueFrom(
      http.post(`${environment.apiUrl}/users/check-token`, {
        username: "arggrm",
        token: accessToken,
      })
    )
    return true;
  } catch (e) {
    tokenService.removeToken();
    router.navigate(['login']);
    return false;
  }
};
