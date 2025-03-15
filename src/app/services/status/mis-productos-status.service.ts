import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MisProductosStatus } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class MisProductosStatusService {

  private readonly misProductosSubject = new BehaviorSubject<MisProductosStatus>({
    isActiveToggleEditProduct: false, 
    isActiveToggleCreateProduct: false 
  });

  misProductosStatus$: Observable<MisProductosStatus> = this.misProductosSubject.asObservable();

  toggleItem(item: keyof MisProductosStatus): void {
    const currentItems = this.misProductosSubject.value;
    const newItems = { ...currentItems, [item]: !currentItems[item] };

    this.misProductosSubject.next(newItems);
  }

  closeTab(item: keyof MisProductosStatus): void {
    const currentItems = this.misProductosSubject.value;
    const newItems = { ...currentItems, [item]: false };

    this.misProductosSubject.next(newItems);
  }

}
