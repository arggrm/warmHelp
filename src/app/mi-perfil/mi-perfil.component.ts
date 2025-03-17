import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { MiPerfilStatus, ProfileInterface } from '../services/interfaces/auth';
import { MiPerfilStatusService } from '../services/status/profile-status.service';
import { UserStateService } from '../services/auth/user-state.service';
import { CredentialsService } from '../services/auth/credentials.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PopupService } from '../services/utils/popup.service';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterModule, EditProfileComponent, ChangePasswordComponent],
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss']
})
export class MiPerfilComponent implements OnInit, OnDestroy {

  private subscription: Subscription | undefined;

  userProfile: ProfileInterface | null = null;

  userId: number | null = null;

  isActiveItems: MiPerfilStatus = {
    isActiveToggleEditProfile: false,
    isActiveToggleChangePassword: false
  };

  constructor(
    private readonly userStateService: UserStateService,
    private readonly miPerfilStatusService: MiPerfilStatusService,
    private readonly credentialsService: CredentialsService,
    private readonly popupService: PopupService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.loadUserProfile();
    this.subscription = this.miPerfilStatusService.miPerfilStatus$.subscribe((status) => {
      this.isActiveItems = status;
    });
    this.userId = this.userStateService.getId();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  async deleteAccount() {
    const password = await this.popupService.showDeleteAccountConfirmation();
    if (password) {
      this.credentialsService.deleteAccount(this.userId ?? 0, password, this.userStateService.getToken() ?? '').subscribe({
        next: (response) => {
          this.popupService.showMessage('¡Cuenta eliminada!', response.message, 'success');
          this.credentialsService.logout();
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Error al eliminar la cuenta', error);
          this.popupService.showMessage('Error', error.error.message, 'error');
        }
      });
    } else {
      this.popupService.showMessage('Acción cancelada', 'No se ha realizado ninguna acción', 'info');
    }
  }

  loadUserProfile(): void {

    if (!this.userStateService.getId()) {
      console.error('No se ha encontrado el ID del usuario en la sesión');
    }

    this.credentialsService.getProfile(this.userStateService.getId() ?? 0).subscribe({
      next: (response) => {
        this.userProfile = response;
      },
      error: (error) => {
        console.error('Error al cargar el perfil del usuario', error);
      }
    });
  }

  toggleItem(option: keyof MiPerfilStatus): void {
    this.miPerfilStatusService.toggleItem(option);
  }
}
