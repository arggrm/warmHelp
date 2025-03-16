import { Component, OnInit } from '@angular/core';
import { UserStateService } from '../../services/auth/user-state.service';
import { Currency, ProductCardInterface } from '../../services/interfaces/product';
import { NgFor, NgIf } from '@angular/common';
import { TruncateTextPipe } from "../../services/pipes/truncate-text.pipe";
import { RouterModule } from '@angular/router';
import { TokenService } from '../../services/auth/token.service';

@Component({
  selector: 'app-home',
  imports: [NgFor, NgIf, TruncateTextPipe, RouterModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  bestMinerals: ProductCardInterface[] = [
    {
      name: "Diamante",
      image: "images/products/diamante.jpg",
      currency: Currency.EUR,
      price: 500,
      description: "El diamante es una piedra preciosa y lujosa. Es conocido por sus propiedades radiantes y su valor en la joyería.",
    },
    {
      name: "Zafiro",
      image: "images/products/zafiro.png",
      currency: Currency.USD,
      price: 200,
      description: "El zafiro es una piedra de color azul brillante. Es conocido por sus propiedades tranquilas y su valor en la joyería.",
    },
    {
      name: "Rubi",
      image: "images/products/rubi.jpg",
      currency: Currency.EUR,
      price: 300,
      description: "El rubi es una piedra de color rojo brillante. Es conocido por sus propiedades energéticas y su valor en la joyería.",
    },
    {
      name: "Esmeralda",
      image: "images/products/esmeralda.jpg",
      currency: Currency.USD,
      price: 400,
      description: "La esmeralda es una piedra de color verde brillante. Es conocido por sus propiedades tranquilas y su valor en la joyería.",
    },
  ];

  newMinerals: ProductCardInterface[] = [
    {
      name: "Amatista",
      image: "images/products/amatista.jpg",
      currency: Currency.USD,
      price: 100,
      description: "La amatista es una variedad de cuarzo morado muy apreciada en joyería. Este, en particular, fue encontrado al norte de España.",
    },
    {
      name: "Cuarzo Rosa",
      image: "images/products/cuarzo-rosa.jpg",
      currency: Currency.USD,
      price: 120,
      description: "El cuarzo rosa es conocido por ser una piedra de amor y armonía. Fue descubierto en 2012 en la región de Chihuahua, México.",
    },
    {
      name: "Citrino",
      image: "images/products/citrino.jpg",
      currency: Currency.EUR,
      price: 80,
      description: "El citrino es una piedra de color amarillo brillante. Es conocido por sus propiedades energéticas.",
    },
    {
      name: "Jade",
      image: "images/products/jade.jpg",
      currency: Currency.USD,
      price: 150,
      description: "El jade es muy valorado en muchas culturas como símbolo de pureza y serenidad.",
    },
    {
      name: "Turquesa",
      image: "images/products/turquesa.jpg",
      currency: Currency.EUR,
      price: 90,
      description: "La turquesa es una piedra de color azul brillante. Es conocida por sus propiedades curativas y antiestres.",
    },
  ];

  name: string | null = null;

  constructor(
    private readonly userStateService: UserStateService,
    private readonly tokenService: TokenService
  ) {}
  
  ngOnInit(): void {
    this.name = this.userStateService.getUsername();
   }

  isLoggedIn() {
    return this.tokenService.getAccessToken() !== '';
  }

}
