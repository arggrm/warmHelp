import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarStatusService {

  private readonly sidebarStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  sidebarStatus$: Observable<boolean> = this.sidebarStatusSubject.asObservable();

  changeStatus(status: boolean): void {
    if (this.sidebarStatusSubject.value !== status) {
      this.sidebarStatusSubject.next(status);
    }
  }
}
