import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { SidebarStatusService } from '../../services/status/sidebar-status.service';
import { RouterModule } from '@angular/router';
import { TokenService } from '../../services/auth/token.service';

@Component({
  selector: 'app-sidebar',
  imports: [NgFor, NgIf, RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  isActiveSidebar: boolean = false;

  readonly listSidebar = [
    { nombre: 'Inicio', icono: 'bi-house-fill', path: 'app' },
    { nombre: 'Mi perfil', icono: 'bi-person-fill', path: 'app/profile' },
    { nombre: 'Editar perfil', icono: 'bi-pencil-fill', path: 'app/edit-profile' },
    { nombre: 'Mis productos', icono: 'bi-box-seam-fill', path: 'app/my-products' },
    { nombre: 'Cerrar Sesión', icono: 'bi-door-open-fill', path: 'login', click: () => this.logout() },
  ];
  readonly socialMediaList = [
    { nombre: 'Facebook', icono: 'bi-facebook' },
    { nombre: 'X (Twitter)', icono: 'bi-twitter-x' },
    { nombre: 'Instagram', icono: 'bi-instagram' },
    { nombre: 'LinkedIn', icono: 'bi-linkedin' },
    { nombre: 'YouTube', icono: 'bi-youtube' },
  ];
  constructor(
    private readonly sidebarStatusService: SidebarStatusService,
    private readonly tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    this.sidebarStatusService.sidebarStatus$.subscribe(value => {
      this.isActiveSidebar = value;
    })
  }

  logout(): void {
    this.tokenService.removeToken()
  }
}
