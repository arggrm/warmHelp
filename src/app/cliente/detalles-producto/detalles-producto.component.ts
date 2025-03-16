import { Component, ElementRef, HostListener } from '@angular/core';
import { TiendaStatusService } from '../../services/status/tienda-status.service';
import { Currency, ProductCardInterface } from '../../services/interfaces/product';
import { StarRatingComponent } from "../star-rating/star-rating.component";

@Component({
  selector: 'app-detalles-producto',
  imports: [StarRatingComponent],
  standalone: true,
  templateUrl: './detalles-producto.component.html',
  styleUrl: './detalles-producto.component.scss'
})
export class DetallesProductoComponent {

  product: ProductCardInterface = { 
    name: "Amatista", 
    image: "images/products/amatista.jpg", 
    currency: Currency.EUR, 
    description: "Hermosa amatista de color púrpura intenso.", 
    price: 50, 
    rating: 4.5 }

  constructor(
    private readonly elRef: ElementRef,
    private readonly tiendaStatusService: TiendaStatusService,
  ) { }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.closeDetails();
    }
  }

  closeDetails(): void {
    this.tiendaStatusService.changeStatus(false);
  }
}
