import { Component, ElementRef, HostListener } from '@angular/core';
import { MisProductosStatusService } from '../../../services/status/mis-productos-status.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CredentialsService } from '../../../services/auth/credentials.service';

@Component({
  selector: 'app-crear-producto',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.scss'
})
export class CrearProductoComponent {

  createForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly credentialsService: CredentialsService,
    private readonly elRef: ElementRef,
    private readonly misProductosStatusService: MisProductosStatusService,
  ) {
    this.createForm = this.formBuilder.group({
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
      this.toggleCreateProducts();
    }
  }

  toggleCreateProducts() {
    this.misProductosStatusService.closeTab('isActiveToggleCreateProduct');
  }

  submit() {
    if (this.createForm.invalid) {
      return;
    }

    // this.credentialsService.edit(this.createForm.value as UserInterface).subscribe({
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
