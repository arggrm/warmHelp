import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  // Recibe un texto (value) y un límite de palabras (wordLimit) por defecto a 5
  // Si el texto supera el límite, se trunca y se le agrega "..." al final
  transform(value: string, wordLimit: number = 5, charLimit: number = 100): string {

    // Si no hay texto, devolver vacío
    if (!value) {
      return '';
    }

    // Truncar primero por caracteres si es necesario
    if (value.length > charLimit) {
      return `${value.slice(0, charLimit)}...`;
    }

    // Truncar por palabras si es necesario
    const words = value.split(' ');
    if (words.length > wordLimit) {
      return `${words.slice(0, wordLimit).join(' ')}...`;
    }

    // Si no hay necesidad de truncar, devolver el texto completo
    return value;
  }
}
