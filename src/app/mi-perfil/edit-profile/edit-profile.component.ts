import { Component, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CredentialsService } from '../../services/auth/credentials.service';
import { UserInterface } from '../../services/interfaces/auth';
import { MiPerfilStatusService } from '../../services/status/profile-status.service';

@Component({
  selector: 'app-edit-profile',
  imports: [ReactiveFormsModule, NgIf],
  standalone: true,
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent {

  editForm: FormGroup;
  isActiveToggleEditProfile: boolean = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly credentialsService: CredentialsService,
    private readonly elRef: ElementRef,
    private readonly miPerfilStatusService: MiPerfilStatusService,
  ) {
    this.editForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      roleName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
    })
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.closeEditProfile();
    }
  }

  closeEditProfile(): void {
    this.miPerfilStatusService.closeTab('isActiveToggleEditProfile');
  }

  submit() {
    if (this.editForm.invalid) {
      return;
    }

    this.credentialsService.edit(this.editForm.value as UserInterface).subscribe({
      next: (data) => {
        console.log(data);
        // Añadir un sweet alert
        this.closeEditProfile();

      },
      error: err => {
        console.log(err);
        // Añadir un sweet alert
      }
    })
  }

}
