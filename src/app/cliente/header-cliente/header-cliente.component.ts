import { Component } from '@angular/core';
import { TokenService } from '../../services/auth/token.service';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeaderButtonsStatusService, HeaderButtonStatus } from '../../services/status/header-buttons-status.service';
import { TabProfileComponent } from "../../tabs/tab-profile/tab-profile.component";
import { CarritoComponent } from "../carrito/carrito.component";

@Component({
  selector: 'app-header-cliente',
  imports: [NgIf, RouterModule, TabProfileComponent, CarritoComponent],
  templateUrl: './header-cliente.component.html',
  styleUrl: './header-cliente.component.scss'
})
export class HeaderClienteComponent {

  private subscription: Subscription | undefined;

  isActiveItems: HeaderButtonStatus = {
    isActiveNotification: false,
    isActiveSettings: false,
    isActiveProfile: false,
    isActiveCart: false
  };

  constructor(
    private readonly tokenService: TokenService,
    private readonly headerButtonsStatusService: HeaderButtonsStatusService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.headerButtonsStatusService.isActiveItems$.subscribe((status) => {
      this.isActiveItems = status;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toggleItem(option: keyof HeaderButtonStatus): void {
    this.headerButtonsStatusService.toggleItem(option);
    console.log(this.isActiveItems);
  }

  isLoggedIn() {
    return this.tokenService.getAccessToken() !== '';
  }
}
