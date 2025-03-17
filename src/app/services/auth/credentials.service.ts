import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { LoginInterface, ProfileInterface, UserInterface } from '../interfaces/auth';
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
    return this.http.post<any>(`${this.usersUrl}/login`, credentials);
  }

  register(userData: UserInterface): Observable<any> {
    return this.http.post<any>(`${this.usersUrl}/register`, userData);
  }

  getProfile(id: number): Observable<any> {
    return this.http.get<any>(`${this.usersUrl}/info/${id}`);
  }

  edit(userData: ProfileInterface, id: number): Observable<any> {
    return this.http.put<any>(`${this.usersUrl}/info/${id}`, userData);
  }

  updatePassword(userId: number, oldPassword: string, newPassword: string): Observable<any> {
    return this.http.put(`${this.usersUrl}/update-password/${userId}`, { oldPassword, newPassword });
  }

  deleteAccount(userId: number, password: string, token: string): Observable<any> {
    return this.http.delete(`${this.usersUrl}/delete/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
      body: { password: password }
    });
  }

  logout(): void {
    this.tokenService.removeToken();
    this.userStateService.removeSession();
  }

}
