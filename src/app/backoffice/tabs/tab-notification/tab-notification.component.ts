import { Component, ElementRef, HostListener } from '@angular/core';
import { TruncateTextPipe } from '../../../services/pipes/truncate-text.pipe';
import { HeaderButtonsStatusService } from '../../../services/status/header-buttons-status.service';

@Component({
  selector: 'app-tab-notification',
  imports: [
    TruncateTextPipe,
  ],
  templateUrl: './tab-notification.component.html',
  styleUrl: './tab-notification.component.scss'
})
export class TabNotificationComponent {

  constructor(
    private readonly elRef: ElementRef,
    private readonly headerButtonsStatusService: HeaderButtonsStatusService,
  ) { }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.headerButtonsStatusService.closeTab("isActiveNotification");
    }
  }
}
