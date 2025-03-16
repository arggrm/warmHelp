import { NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Currency, ProductCardInterface } from '../../services/interfaces/product';
import { StarRatingComponent } from "../star-rating/star-rating.component";
import { DetallesProductoComponent } from "../detalles-producto/detalles-producto.component";
import { TiendaStatusService } from '../../services/status/tienda-status.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tienda',
  imports: [NgFor, StarRatingComponent, NgIf, DetallesProductoComponent],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.scss'
})
export class TiendaComponent implements OnInit, OnDestroy {

  private subscription: Subscription | undefined;
  
  isActiveToggleDetails: boolean = false;

  products: ProductCardInterface[] = [
    { name: "Amatista", image: "images/products/amatista.jpg", currency: Currency.EUR, description: "Hermosa amatista de color púrpura intenso.", price: 50, rating: 4.5 },
    { name: "Calcantita Azul", image: "images/products/calcantita-azul.webp", currency: Currency.USD, description: "Impresionante calcantita azul vibrante.", price: 75, rating: 4.7 },
    { name: "Cavansita", image: "images/products/cavansita.webp", currency: Currency.USD, description: "Cristal de cavansita de un azul profundo.", price: 90, rating: 4.8 },
    { name: "Citrino", image: "images/products/citrino.jpg", currency: Currency.USD, description: "Radiante citrino de tonos dorados.", price: 60, rating: 4.3 },
    { name: "Cuarzo Rosa", image: "images/products/cuarzo-rosa.jpg", currency: Currency.EUR, description: "Piedra de cuarzo rosa con suaves tonos pastel.", price: 40, rating: 4.2 },
    { name: "Diamante", image: "images/products/diamante.jpg", currency: Currency.USD, description: "Brillante diamante de alta calidad.", price: 5000, rating: 5.0 },
    { name: "Esmeralda", image: "images/products/esmeralda.jpg", currency: Currency.EUR, description: "Esmeralda verde con un brillo excepcional.", price: 300, rating: 4.6 },
    { name: "Fluorita Aguamarina", image: "images/products/fluorita-aguamarina.webp", currency: Currency.USD, description: "Fluorita con matices de aguamarina.", price: 80, rating: 4.4 },
    { name: "Fluorita Añil", image: "images/products/fluorita-añil.webp", currency: Currency.USD, description: "Fluorita de un hermoso tono añil.", price: 85, rating: 4.5 },
    { name: "Jade", image: "images/products/jade.jpg", currency: Currency.USD, description: "Piedra de jade de intenso color verde.", price: 120, rating: 4.7 },
    { name: "Rubí Prusquita", image: "images/products/rubi-prusquita.webp", currency: Currency.EUR, description: "Rubí prusquita con un rojo vibrante.", price: 350, rating: 4.8 },
    { name: "Rubí", image: "images/products/rubi.jpg", currency: Currency.EUR, description: "Rubí de calidad premium con un rojo intenso.", price: 400, rating: 4.9 },
    { name: "Turquesa", image: "images/products/turquesa.jpg", currency: Currency.EUR, description: "Piedra de turquesa con un azul impresionante.", price: 95, rating: 4.3 },
    { name: "Zafiro", image: "images/products/zafiro.png", currency: Currency.USD, description: "Zafiro azul con un brillo espectacular.", price: 450, rating: 4.9 }
  ];



  constructor(
    private readonly tiendaStatusService: TiendaStatusService,
  ) { }

  ngOnInit() {
    this.subscription = this.tiendaStatusService.tiendaStatus$.subscribe((status) => {
      this.isActiveToggleDetails = status;
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  toggleDetails() {
    this.isActiveToggleDetails = !this.isActiveToggleDetails;
    this.tiendaStatusService.changeStatus(this.isActiveToggleDetails);
  }
}
