import { Component, ElementRef, HostListener } from '@angular/core';
import { MiPerfilStatusService } from '../../services/status/profile-status.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { CredentialsService } from '../../services/auth/credentials.service';
import { UserStateService } from '../../services/auth/user-state.service';
import { PopupService } from '../../services/utils/popup.service';

@Component({
  selector: 'app-change-password',
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {

  passwordForm: FormGroup;
  passwordVisible: boolean = false;

  constructor(
    private readonly elRef: ElementRef,
    private readonly miPerfilStatusService: MiPerfilStatusService,
    private readonly formBuilder: FormBuilder,
    private readonly credentialsService: CredentialsService,
    private readonly userStateService: UserStateService,
    private readonly popupService: PopupService,
  ) {
    this.passwordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.closeChangePassword();
    }
  }

  closeChangePassword(): void {
    this.miPerfilStatusService.closeTab('isActiveToggleChangePassword');
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  submit() {
    if (this.passwordForm.invalid) {
      return;
    }

    this.credentialsService.updatePassword(
      this.userStateService.getId() ?? 0,
      this.passwordForm.value.oldPassword,
      this.passwordForm.value.newPassword
    ).subscribe({
      next: (res) => {
        this.closeChangePassword();
        this.popupService.showMessage('Contraseña actualizada', res.message, 'success');
      },
      error: (err) => {
        console.error("Error al actualizar la contraseña:", err);
        this.popupService.showMessage('Error', 'Error al actualizar la contraseña', 'error');
      }
    });
  }


}
