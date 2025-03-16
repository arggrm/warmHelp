import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaStatusService {

  private tiendaStatusSubject = new BehaviorSubject<boolean>(false);
  tiendaStatus$: Observable<boolean> = this.tiendaStatusSubject.asObservable();

  changeStatus(status: boolean): void {
    if (this.tiendaStatusSubject.value !== status) {
      this.tiendaStatusSubject.next(status);
    }
  }
}
