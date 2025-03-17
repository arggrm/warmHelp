import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  showMessage(
    title: string,
    message: string,
    icon: 'success' | 'warning' | 'error' | 'info' | 'question' = 'info',
  ): void {
    Swal.fire({
      title: title,
      text: message,
      icon: icon,
      background: '#0c213d',
      color: '#7a94b9',
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#710400'
    })
  }

  showSuccessRegister(): void {
    Swal.fire({
      title: '¡Enhorabuena!',
      text: 'Tu cuenta ha sido creada exitosamente.',
      icon: 'success',
      background: '#0c213d',
      color: '#7a94b9',
    })
  }

  loader(title: string = "Cargando...", message: string = ''): void {
    Swal.fire({
      title: title,
      text: message,
      background: '#0c213d',
      color: '#7a94b9',
      allowEscapeKey: false,
      didOpen() {
        Swal.showLoading()
      }
    })
  }

  async showConfirmation(
    title: string, message: string, confirmButtonText: string = "Aceptar", cancelButtonText: string = "Cancelar",
  ): Promise<boolean> {

    const result = await Swal.fire({
      title: title,
      text: message,
      icon: "question",
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
    })

    return result.isConfirmed;
  }

  close(): void {
    Swal.close()
  }

  async showDeleteAccountConfirmation(): Promise<string | false> {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      background: '#0c213d',
      color: '#7a94b9',
      confirmButtonColor: '#8e1c00',
      cancelButtonColor: '#3085d6',
      confirmButtonText: '¡Sí, borrar cuenta!',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      const { value: password } = await Swal.fire({
        title: 'Por favor, ingresa tu contraseña para confirmar',
        input: 'password',
        background: '#0c213d',
        color: '#7a94b9',
        inputPlaceholder: 'Contraseña',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Confirmar',
        confirmButtonColor: '#8e1c00',
        inputValidator: (value) => {
          if (!value) {
            return '¡Por favor ingresa tu contraseña!';
          } else {
            return null; // or return an empty string, depending on your requirements
          }
        }
      });

      if (password) {
        // Retorna la contraseña ingresada para que luego la utilices en la lógica de eliminación
        return password;
      } else {
        // Si el usuario no ingresa la contraseña, la eliminación no se ejecutará
        return false;
      }
    }

    return false;
  }

}
