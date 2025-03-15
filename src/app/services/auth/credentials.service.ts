import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { LoginInterface, UserInterface } from '../interfaces/auth';
import { TokenService } from './token.service';
import { UserStateService } from './user-state.service';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  
  private readonly usersUrl: string = `${environment.apiUrl}/users`;
  
  constructor(
    private readonly http: HttpClient,
    private readonly tokenService: TokenService,
    private readonly userStateService: UserStateService,
  ) { }

  login(credentials: LoginInterface): Observable<any> {
    console.log(`${this.usersUrl}/login`);
    return this.http.post<any>(`${this.usersUrl}/login`, credentials);
  }

  register(userData: UserInterface): Observable<any> {
    return this.http.post<any>(`${this.usersUrl}/register`, userData)
  }

  getProfile(): Observable<any> {
    return this.http.get<any>(`${this.usersUrl}/profile`);
  }

  edit(arg0: UserInterface): Observable<any> {
    throw new Error('Method not implemented.');
  }
  
  logout(): void {
    this.tokenService.removeToken();
    this.userStateService.removeSession();

    // Si hay una ruta de logout en la API, puedes hacerla aquí
    // return this.http.post(`${this.usersUrl}/logout`, {}).subscribe();
  }

}
