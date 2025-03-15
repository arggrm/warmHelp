import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface HeaderButtonStatus {
  isActiveNotification: boolean;
  isActiveSettings: boolean;
  isActiveProfile: boolean;
  isActiveCart: boolean
}

@Injectable({
  providedIn: 'root'
})
export class HeaderButtonsStatusService {

  private readonly isActiveItemsSubject = new BehaviorSubject<HeaderButtonStatus>({
    isActiveNotification: false,
    isActiveSettings: false,
    isActiveProfile: false,
    isActiveCart: false
  });

  isActiveItems$: Observable<HeaderButtonStatus> = this.isActiveItemsSubject.asObservable();

  toggleItem(item: keyof HeaderButtonStatus): void {
    const currentItems = this.isActiveItemsSubject.value;
    const newItems = { ...currentItems, [item]: !currentItems[item] };

    this.isActiveItemsSubject.next(newItems);
  }

  closeTab(item: keyof HeaderButtonStatus): void {
    const currentItems = this.isActiveItemsSubject.value;
    const newItems = { ...currentItems, [item]: false };

    this.isActiveItemsSubject.next(newItems);
  }
}
