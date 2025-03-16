import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { MiPerfilStatus } from '../services/interfaces/auth';
import { MiPerfilStatusService } from '../services/status/profile-status.service';
import { UserStateService } from '../services/auth/user-state.service';
import { CredentialsService } from '../services/auth/credentials.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterModule, EditProfileComponent, ChangePasswordComponent],
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss']
})
export class MiPerfilComponent implements OnInit, OnDestroy {

  private subscription: Subscription | undefined;

  userProfile: any = {};

  isActiveItems: MiPerfilStatus = {
    isActiveToggleEditProfile: false,
    isActiveToggleChangePassword: false
  };

  constructor(
    private readonly userStateService: UserStateService,
    private readonly miPerfilStatusService: MiPerfilStatusService,
    private readonly credentialsService: CredentialsService,
  ) { }

  ngOnInit(): void {
    this.loadUserProfile();
    this.subscription = this.miPerfilStatusService.miPerfilStatus$.subscribe((status) => {
      this.isActiveItems = status;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loadUserProfile(): void {
    const userId = this.userStateService.getId();  // Obtener el ID del usuario desde el servicio

    if (userId) {
      this.credentialsService.getProfile(userId).subscribe({
        next: (response) => {
          this.userProfile = response;
        },
        error: (error) => {
          console.error('Error al cargar el perfil del usuario', error);
        }
      });
    } else {
      console.error('No se ha encontrado el ID del usuario en la sesión');
    }
  }

  toggleItem(option: keyof MiPerfilStatus): void {
    this.miPerfilStatusService.toggleItem(option);
  }
}
