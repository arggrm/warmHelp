import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CredentialsService } from '../../services/auth/credentials.service';
import { ProfileInterface } from '../../services/interfaces/auth';
import { MiPerfilStatusService } from '../../services/status/profile-status.service';
import { UserStateService } from '../../services/auth/user-state.service';
import { PopupService } from '../../services/utils/popup.service';

@Component({
  selector: 'app-edit-profile',
  imports: [ReactiveFormsModule, NgIf],
  standalone: true,
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent implements OnInit {

  editForm: FormGroup;
  isActiveToggleEditProfile: boolean = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly credentialsService: CredentialsService,
    private readonly elRef: ElementRef,
    private readonly miPerfilStatusService: MiPerfilStatusService,
    private readonly userStateService: UserStateService,
    private readonly popupService: PopupService,
  ) {
    this.editForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      username: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.closeEditProfile();
    }
  }

  private loadUserProfile(): void {
    this.credentialsService.getProfile(this.userStateService.getId() ?? 0).subscribe({
      next: (userData: ProfileInterface) => {
        if (userData) {
          this.editForm.patchValue({
            username: userData.user?.username || '',
            firstName: userData.firstName,
            lastName: userData.lastName,
            address: userData.address,
            phone: userData.phone,
            email: userData.email,
          });
        }
      },
      error: (err) => {
        console.error('Error al cargar el perfil:', err);
      }
    });
  }

  closeEditProfile(): void {
    this.miPerfilStatusService.closeTab('isActiveToggleEditProfile');
  }

  submit(): void {

    if (this.editForm.invalid) {
      return;
    }

    this.credentialsService.edit(this.editForm.value as ProfileInterface, this.userStateService.getId() ?? 0).subscribe({
      next: (data) => {
        this.popupService.showMessage('Perfil actualizado', 'Perfil actualizado con éxito', 'success');
        this.closeEditProfile();
      },
      error: (err) => {
        console.error('Error al actualizar el perfil:', err);
        this.popupService.showMessage('Error', 'Error al actualizar el perfil', 'error') // Puedes reemplazar con un SweetAlert
      }
    });

  }
}