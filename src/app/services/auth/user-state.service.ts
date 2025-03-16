import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  private readonly USER_KEY = "tienda_online";

  // Guardar la información del usuario, incluido el ID
  save(username: string, role: string, id: number): void  {
    sessionStorage.setItem(this.USER_KEY, JSON.stringify({username, role, id}));


    console.log(sessionStorage.getItem(this.USER_KEY));
  }


  getToken(): string | null {
    const session = JSON.parse(<string>sessionStorage.getItem(this.USER_KEY));
    if (!session) {
      return null;
    }
    return session.token;
  }

  // Obtener el nombre de usuario desde sessionStorage
  getUsername(): string | null {
    const session = JSON.parse(<string>sessionStorage.getItem(this.USER_KEY));
    if (!session) {
      return null;
    }
    return session.username;
  }

  // Obtener el ID del usuario desde sessionStorage
  getId(): number | null {
    const session = JSON.parse(<string>sessionStorage.getItem(this.USER_KEY));
    if (!session) {
      return null;
    }
    return session.id;
  }

  // Obtener el rol del usuario desde sessionStorage
  getRole(): string | null {
    const session = JSON.parse(<string>sessionStorage.getItem(this.USER_KEY));
    if (!session) {
      return null;
    }
    return session.role;
  }

  // Eliminar la sesión del usuario
  removeSession(): void {
    sessionStorage.removeItem(this.USER_KEY);
  }
}
