import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  showMessage(title: string, message: string,
    icon: 'success' | 'warning' | 'error' | 'info' | 'question' = 'info'): void {
    Swal.fire({
      title: title,
      text: message,
      icon: icon,
      iconColor: '#8e1c00',
      background: '#0c213d',
      color: '#7a94b9',
      confirmButtonText: "Cerrar",
      confirmButtonColor: '#710400'
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

}
