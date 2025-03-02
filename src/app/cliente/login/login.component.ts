import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CredentialsService } from '../../services/auth/credentials.service';
import { LoginInterface } from '../../services/interfaces/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly credentialsService: CredentialsService,

  ) {
    this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submit() {
    if (this.loginForm.valid) {
      return;
    }

    this.credentialsService.login(this.loginForm.value as LoginInterface).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
