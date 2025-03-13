import { Component } from '@angular/core';
import { TokenService } from '../../services/auth/token.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header-cliente',
  imports: [ NgIf ],
  templateUrl: './header-cliente.component.html',
  styleUrl: './header-cliente.component.scss'
})
export class HeaderClienteComponent {

  constructor(
    private readonly tokenService: TokenService,
  ) { }

  navigateTo(route: string) {
    window.location.href = route
  }

  isLoggedIn() {
    return this.tokenService.getAccessToken() !== '';
  }

}
