import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly ACCESS_TOKEN_KEY: string = 'tienda_token';
  private readonly REFRESH_TOKEN_KEY: string = 'tienda_refresh_token';

  constructor(
    private readonly cookieService: CookieService,
  ) { }
  saveTokens(token: string, refreshToken: string): void {
    this.cookieService.set(this.ACCESS_TOKEN_KEY, token, {
      path: "/",
      secure: environment.tokenSecure,
      sameSite: "Strict"
    })

    this.cookieService.set(this.REFRESH_TOKEN_KEY, refreshToken, {
      path: "/",
      secure: environment.tokenSecure,
      sameSite: "Strict"
    })
  }

  getRefreshToken(): string {
    return this.cookieService.get(this.REFRESH_TOKEN_KEY);
  }
  getAccessToken(): string {
    return this.cookieService.get(this.ACCESS_TOKEN_KEY);
  }
  
  removeToken(): void {
    this.cookieService.delete(this.ACCESS_TOKEN_KEY, '/', '', environment.tokenSecure, 'Strict');
    this.cookieService.delete(this.ACCESS_TOKEN_KEY, '/', '', environment.tokenSecure, 'Strict');
  }

}
