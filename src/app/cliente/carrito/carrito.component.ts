import { Component, ElementRef, HostListener } from '@angular/core';
import { HeaderButtonsStatusService } from '../../services/status/header-buttons-status.service';
import { CartInterface } from '../../services/interfaces/cart';
import { Currency } from '../../services/interfaces/product';
import {  NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TruncateTextPipe } from "../../services/pipes/truncate-text.pipe";

@Component({
  selector: 'app-carrito',
  imports: [NgFor, NgIf, FormsModule, TruncateTextPipe],
  standalone: true,
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {

  cartItems: CartInterface[] = [
    {
      name: 'Amatista',
      image: 'images/products/amatista-thumbnail.jpg',
      currency: Currency.EUR,
      price: 100,
      quantity: 1,
    },
    {
      name: 'Cuarzo Rosa',
      image: 'images/products/cuarzo-rosa-thumbnail.jpg',
      currency: Currency.USD,
      price: 120,
      quantity: 1,
    },
    {
      name: 'Citrino',
      image: 'images/products/citrino-thumbnail.jpg',
      currency: Currency.EUR,
      price: 80,
      quantity: 1,
    },
    {
      name: 'Jade',
      image: 'images/products/jade-thumbnail.jpg',
      currency: Currency.USD,
      price: 150,
      quantity: 1,
    },
    {
      name: 'Turquesa',
      image: 'images/products/turquesa-thumbnail.jpg',
      currency: Currency.EUR,
      price: 90,
      quantity: 1,
    },
  ];

  constructor(
    private readonly elRef: ElementRef,
    private readonly headerButtonsStatusService: HeaderButtonsStatusService,
  ) { }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.closeCart();
    }
  }

  closeCart(): void {
    this.headerButtonsStatusService.closeTab('isActiveCart');
  }

  getSubtotalProduct(item: any): number {
    return item.price * item.quantity;
  }

  increaseQuantity(index: number) {
    this.cartItems[index].quantity++;
  }

  decreaseQuantity(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    }
  }

  updateQuantity(item: CartInterface, action: 'increment' | 'decrement') {
    if (action === 'increment') {
      item.quantity++;
    } else if (action === 'decrement' && item.quantity > 1) {
      item.quantity--;
    }
  }

  clearCart(): void {
    this.cartItems = [];
  }

}
