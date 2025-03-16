import { Component, ElementRef, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderButtonsStatusService } from '../../services/status/header-buttons-status.service';
import { PopupService } from '../../services/utils/popup.service';
import { UserStateService } from '../../services/auth/user-state.service';
import { CredentialsService } from '../../services/auth/credentials.service';


@Component({
  selector: 'app-tab-profile',
  imports: [
    RouterModule
  ],
  standalone: true,
  templateUrl: './tab-profile.component.html',
  styleUrl: './tab-profile.component.scss'
})
export class TabProfileComponent {

  constructor(
    private readonly elRef: ElementRef,
    private readonly headerButtonsStatusService: HeaderButtonsStatusService,
    private readonly credentialsService: CredentialsService,
    private readonly popupService: PopupService,
    private readonly userStateService: UserStateService,    
    private readonly router: Router,    
  ) { }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.headerButtonsStatusService.closeTab("isActiveProfile");
    }
  }

  goToProfile(): void {
    if(this.userStateService.getRole() === 'ADMIN' || this.userStateService.getRole() === 'SELLER') {
      this.router.navigate(['/app/my-profile']);
    } else {
      this.router.navigate(['/my-profile']);
    }
  }

  logout(): void {
    this.popupService.loader('Cerrando sesión...', 'Espere un momento');

    this.credentialsService.logout();

    setTimeout(() => {
      this.popupService.close();
      this.router.navigate(['/']);
    }, 1500);
  }
}
