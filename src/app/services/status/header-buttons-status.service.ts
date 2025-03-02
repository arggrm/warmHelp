import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface HeaderButtonStatus {
  isActiveNotification: boolean;
  isActiveSettings: boolean;
  isActiveProfile: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HeaderButtonsStatusService {

  private readonly isActiveItemsSubject = new BehaviorSubject<HeaderButtonStatus>({
    isActiveNotification: false,
    isActiveSettings: false,
    isActiveProfile: false
  });

  isActiveItems$: Observable<HeaderButtonStatus> = this.isActiveItemsSubject.asObservable();

  toggleItem(item: keyof HeaderButtonStatus): void {
    const currentItems = this.isActiveItemsSubject.value;

     // Se desactivan todos los botones primero
     const newItems = {
      isActiveNotification: false,
      isActiveSettings: false,
      isActiveProfile: false
    };

    // Luego se activa solo el botón seleccionado
    newItems[item] = !currentItems[item];
    this.isActiveItemsSubject.next(newItems);
  }
}
