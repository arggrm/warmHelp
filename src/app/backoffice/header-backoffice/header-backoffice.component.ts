import { NgIf } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarStatusService } from '../../services/status/sidebar-status.service';

import { RouterModule } from '@angular/router';
import { HeaderButtonsStatusService, HeaderButtonStatus } from '../../services/status/header-buttons-status.service';
import { TabSettingsComponent } from '../../tabs/tab-settings/tab-settings.component';
import { TabProfileComponent } from '../../tabs/tab-profile/tab-profile.component';
import { TabNotificationComponent } from "../../tabs/tab-notification/tab-notification.component";
@Component({
  selector: 'app-header-backoffice',
  imports: [NgIf, RouterModule, TabNotificationComponent, TabProfileComponent, TabSettingsComponent],
  standalone: true,
  templateUrl: './header-backoffice.component.html',
  styleUrls: ['./header-backoffice.component.scss']
})
export class HeaderBackofficeComponent implements OnInit, OnDestroy {

  private subscription: Subscription | undefined;

  isActiveToggle: boolean = false;

  isActiveItems: HeaderButtonStatus = {
    isActiveNotification: false,
    isActiveSettings: false,
    isActiveProfile: false,
    isActiveCart: false
  };

  constructor(
    private readonly sidebarStatusService: SidebarStatusService,
    private readonly headerButtonsStatusService: HeaderButtonsStatusService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.headerButtonsStatusService.isActiveItems$.subscribe((status) => {
      this.isActiveItems = status;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toggleLogo() {
    this.isActiveToggle = !this.isActiveToggle;
    this.sidebarStatusService.changeStatus(this.isActiveToggle);
  }

  toggleItem(option: keyof HeaderButtonStatus): void {
    this.headerButtonsStatusService.toggleItem(option);    
  }
}
