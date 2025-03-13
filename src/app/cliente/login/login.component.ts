import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CredentialsService } from '../../services/auth/credentials.service';
import { LoginInterface } from '../../services/interfaces/auth';
import { TokenService } from '../../services/auth/token.service';
import { Router, RouterModule } from '@angular/router';
import { PopupService } from '../../services/utils/popup.service';
import { UserStateService } from '../../services/auth/user-state.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly credentialsService: CredentialsService,
    private readonly tokenService: TokenService,
    private readonly router: Router,
    private readonly userStateService: UserStateService,
    private readonly popupService: PopupService,

  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  submit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.credentialsService.login(this.loginForm.value as LoginInterface).subscribe({
      next: (data) => {
        this.popupService.loader("Cargando...", "Espere un momento");

        setTimeout(() => {
          this.tokenService.saveTokens(data.token, "234325423423")
          this.userStateService.save(data.username, data.role)
          this.popupService.close();
          this.router.navigate(['/app/control-panel']);
        }, 1500)
      },
      error: (err) => {
        let message;
        let title;
        if (err.error == "Invalid password") {
          title = "Contraseña incorrecta";
          message = "Inténtelo de nuevo"
        }
        else if (err.error == "User not found") {
          title = "El usuario no existe";
          message = "Inténtelo de nuevo"
        }
        else {
          title = "Ups ha ocurrido un error";
          message = err.error;
        }

        this.popupService.showMessage(
          title, message, 'error'
        );
      }
    });
  }

}
