import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CredentialsService } from '../../services/auth/credentials.service';
import { LoginInterface, UserInterface } from '../../services/interfaces/auth';
import { Router, RouterModule } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { PopupService } from '../../services/utils/popup.service';
import { TokenService } from '../../services/auth/token.service';
import { UserStateService } from '../../services/auth/user-state.service';

@Component({
  selector: 'app-registro',
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgClass,
    RouterModule,
  ],
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {

  registerForm: FormGroup;
  passwordVisible: boolean = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly credentialsService: CredentialsService,
    private readonly popupService: PopupService,
    private readonly router: Router,
    private readonly tokenService: TokenService,
    private readonly userStateService: UserStateService,
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      roleName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
    })
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  submit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.credentialsService.register(this.registerForm.value as UserInterface).subscribe({
      next: (data) => {
        this.popupService.showSuccessRegister();

        this.credentialsService.login({
          username: data.username,
          password: this.registerForm.value.password
        } as LoginInterface).subscribe({
          next: (loginData) => {
            this.tokenService.saveTokens(loginData.token, loginData.refreshToken);
            this.userStateService.save(loginData.username, loginData.role, loginData.id);
            if (loginData.role == 'CLIENT') {
              this.router.navigate(['/']);
            } else {
              this.router.navigate(['/app/control-panel']);
            }
          },
          error: err => {
            console.log(err);
          }
        })
      },
      error: err => {
        console.log(err);
      }
    })
  }
}

