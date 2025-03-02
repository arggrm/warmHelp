import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { LoginInterface } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  private readonly loginUrl: string = `${environment.apiUrl}/user/login`;

  constructor(private readonly http: HttpClient) {}
  
  login(credentials: LoginInterface): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials);
  }
}
