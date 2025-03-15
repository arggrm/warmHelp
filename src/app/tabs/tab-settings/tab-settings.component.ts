import { Component, ElementRef, HostListener } from '@angular/core';
import { HeaderButtonsStatusService } from '../../services/status/header-buttons-status.service';

@Component({
  selector: 'app-tab-settings',
  imports: [],
  standalone: true,
  templateUrl: './tab-settings.component.html',
  styleUrl: './tab-settings.component.scss',
})
export class TabSettingsComponent {

  constructor(
    private readonly elRef: ElementRef,
    private readonly headerButtonsStatusService: HeaderButtonsStatusService,
  ) { }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.headerButtonsStatusService.closeTab("isActiveSettings");
    }
  }
}
