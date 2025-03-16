import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { SidebarStatusService } from '../../services/status/sidebar-status.service';
import { Router, RouterModule } from '@angular/router';
import { PopupService } from '../../services/utils/popup.service';
import { CredentialsService } from '../../services/auth/credentials.service';

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
    { nombre: 'Mi perfil', icono: 'bi-person-fill', path: 'app/my-profile' },
    { nombre: 'Mis productos', icono: 'bi-box-seam-fill', path: 'app/my-products' },
    { nombre: 'Cerrar Sesión', icono: 'bi-door-open-fill', click: () => this.logout() },
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
    private readonly credentialsService: CredentialsService,
    private readonly router: Router,
    private readonly popupService: PopupService,
  ) { }

  ngOnInit(): void {
    this.sidebarStatusService.sidebarStatus$.subscribe(value => {
      this.isActiveSidebar = value;
    })
  }

  logout(): void {
    this.popupService.loader('Cerrando sesión...', 'Espere un momento');

    this.credentialsService.logout();

    setTimeout(() => {
      this.popupService.close();
      this.router.navigate(['/']);
    }, 1500);
  }
}
