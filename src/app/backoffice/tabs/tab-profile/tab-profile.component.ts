import { Component, ElementRef, HostListener } from '@angular/core';
import { HeaderButtonsStatusService } from '../../../services/status/header-buttons-status.service';
import { TokenService } from '../../../services/auth/token.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab-profile',
  imports: [
    RouterModule
  ],
  templateUrl: './tab-profile.component.html',
  styleUrl: './tab-profile.component.scss'
})
export class TabProfileComponent {

  constructor(
    private readonly elRef: ElementRef,
    private readonly headerButtonsStatusService: HeaderButtonsStatusService,
    private readonly tokenService: TokenService,
  ) { }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.headerButtonsStatusService.closeTab("isActiveProfile");
    }
  }

  logout(): void { 
    this.tokenService.removeToken()
  }
}
