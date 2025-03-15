import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { MiPerfilStatus } from '../services/interfaces/auth';
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { MiPerfilStatusService } from '../services/status/profile-status.service';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterModule, EditProfileComponent, ChangePasswordComponent],
  templateUrl: './mi-perfil.component.html',
  styleUrl: './mi-perfil.component.scss'
})

export class MiPerfilComponent {

  private subscription: Subscription | undefined;
  isActiveItems: MiPerfilStatus = {
    isActiveToggleEditProfile: false,
    isActiveToggleChangePassword: false
  };

  constructor(
    private readonly miPerfilStatusService: MiPerfilStatusService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.miPerfilStatusService.miPerfilStatus$.subscribe((status) => {
      this.isActiveItems = status;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toggleItem(option: keyof MiPerfilStatus): void {
    this.miPerfilStatusService.toggleItem(option);
  }

}
