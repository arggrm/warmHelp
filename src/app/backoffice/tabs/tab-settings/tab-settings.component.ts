import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderButtonsStatusService, HeaderButtonStatus } from '../../../services/status/header-buttons-status.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab-settings',
  imports: [],
  templateUrl: './tab-settings.component.html',
  styleUrl: './tab-settings.component.scss',
})
export class TabSettingsComponent implements OnInit, OnDestroy {

  isActiveItems: HeaderButtonStatus = {
    isActiveNotification: false,
    isActiveSettings: false,
    isActiveProfile: false
  };

  private subscription: Subscription | undefined;

  constructor(
    private readonly headerButtonsStatusService: HeaderButtonsStatusService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.headerButtonsStatusService.isActiveItems$.subscribe((valores: HeaderButtonStatus) => {
      this.isActiveItems = valores;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
