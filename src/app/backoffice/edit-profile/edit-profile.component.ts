import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CredentialsService } from '../../services/auth/credentials.service';
import { UserInterface } from '../../services/interfaces/auth';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  imports: [ ReactiveFormsModule, RouterModule ],
  standalone: true,
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent {

  descripcion: string = "Diseñador web con experiencia en diseño UX/UI y desarrollo de sitios responsivos. Apasionado por crear experiencias digitales intuitivas y atractivas.";
  editForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly credentialsService: CredentialsService,
    private readonly router: Router,
  ) {
    this.editForm = this.formBuilder.group({
      username: [''],
      password: [''],
      roleName: [''],
      firstName: [''],
      lastName: [''],
      address: [''],
    })
  }


  submit() {
      if (this.editForm.invalid) {
        return;
      }
  
      this.credentialsService.edit(this.editForm.value as UserInterface).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/app/profile']);
          // Añadir un sweet alert
        },
        error: err => {
          console.log(err);
          // Añadir un sweet alert
        }
      })
    }

}
