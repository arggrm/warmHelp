import { Component, ElementRef, HostListener } from '@angular/core';
import { MiPerfilStatusService } from '../../services/status/profile-status.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-change-password',
  imports: [ ReactiveFormsModule, NgIf, NgClass ],
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
  ) {
    this.passwordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
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

  submit(): void {
    if (this.passwordForm.valid) {
      this.closeChangePassword();
    }
  }

}
