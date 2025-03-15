import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MiPerfilStatus } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class MiPerfilStatusService {

  private readonly miPerfilStatusSubject = new BehaviorSubject<MiPerfilStatus>({
    isActiveToggleEditProfile: false,
    isActiveToggleChangePassword: false
  });

  miPerfilStatus$: Observable<MiPerfilStatus> = this.miPerfilStatusSubject.asObservable();

  toggleItem(item: keyof MiPerfilStatus): void {
    const currentItems = this.miPerfilStatusSubject.value;
    const newItems = { ...currentItems, [item]: !currentItems[item] };

    this.miPerfilStatusSubject.next(newItems);
  }

  closeTab(item: keyof MiPerfilStatus): void {
    const currentItems = this.miPerfilStatusSubject.value;
    const newItems = { ...currentItems, [item]: false };

    this.miPerfilStatusSubject.next(newItems);
  }
}
