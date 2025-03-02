import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarStatusService {

  private readonly sidebarStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  sidebarStatus$: Observable<boolean> = this.sidebarStatusSubject.asObservable();

  changeStatus(status: boolean): void {
    this.sidebarStatusSubject.next(status);
  }
}
