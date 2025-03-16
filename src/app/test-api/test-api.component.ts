import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-test-api',
  imports: [ NgIf, CommonModule ],
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.scss']
})
export class TestApiComponent {

  userProfile: any;
  error: string = '';

  constructor(private readonly http: HttpClient) { }

  // Método para hacer la solicitud con el token manual
  testApiConnection() {
    const token = prompt("Ingresa el token de autenticación"); // Solicitar el token manualmente
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      });

      // Realizar la solicitud GET a tu API
      this.http.get<any>('http://localhost:8080/api/users/info/6', { headers })
        .subscribe({
          next: (response) => {
            this.userProfile = response;
            this.error = '';
          },
          error: (err) => {
            this.error = 'Error al cargar el perfil del usuario: ' + err.message;
            this.userProfile = null;
          }
        });
    } else {
      this.error = 'No se ha proporcionado un token';
    }
  }
}
