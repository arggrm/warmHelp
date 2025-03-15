import { Component, ElementRef, HostListener } from '@angular/core';
import { MisProductosStatusService } from '../../../services/status/mis-productos-status.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CredentialsService } from '../../../services/auth/credentials.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-editar-producto',
  imports: [ReactiveFormsModule, NgIf],
  standalone: true,
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.scss'
})
export class EditarProductoComponent {

  editForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly credentialsService: CredentialsService,
    private readonly elRef: ElementRef,
    private readonly misProductosStatusService: MisProductosStatusService,
  ) {
    this.editForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      currency: ['', [Validators.required]],
      price: ['', [Validators.required]],
      tax: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.toggleEditProducts();
    }
  }

  toggleEditProducts() {
    this.misProductosStatusService.closeTab('isActiveToggleEditProduct');
  }

  submit() {
    if (this.editForm.invalid) {
      return;
    }

    // this.credentialsService.edit(this.editForm.value as UserInterface).subscribe({
    //   next: (data) => {
    //     console.log(data);
    //     // Añadir un sweet alert
    //     this.toggleEditProfile(); 

    //   },
    //   error: err => {
    //     console.log(err);
    //     // Añadir un sweet alert
    //   }
    // })
  }

}
