import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { LoginInterface, UserInterface } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  
  private readonly usersUrl: string = `${environment.apiUrl}/users`;

  constructor(
    private readonly http: HttpClient
  ) { }

  login(credentials: LoginInterface): Observable<any> {
    console.log(`${this.usersUrl}/login`);
    return this.http.post<any>(`${this.usersUrl}/login`, credentials);
  }

  register(userData: UserInterface): Observable<any> {
    return this.http.post<any>(`${this.usersUrl}/register`, userData)
  }

  edit(arg0: UserInterface): Observable<any> {
    throw new Error('Method not implemented.');
  }
  
  //logout()

  
}
