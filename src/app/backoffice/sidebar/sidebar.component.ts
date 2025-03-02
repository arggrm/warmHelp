import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { SidebarStatusService } from '../../services/status/sidebar-status.service';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  imports: [NgFor, NgIf, RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  isActiveSidebar$: Observable<boolean> | undefined;

  listSidebar = [
    { nombre: 'Inicio', icono: 'bi-house-fill', path: 'app' },
    { nombre: 'Perfil', icono: 'bi-person-fill', path: 'app/profile' },
    { nombre: 'Editar perfil', icono: 'bi-pencil-fill' },
    { nombre: 'Productos', icono: 'bi-box-seam-fill' },
    { nombre: 'Cerrar Sesión', icono: 'bi-door-open-fill' },
  ];
  socialMediaList = [
    { nombre: 'Facebook', icono: 'bi-facebook' },
    { nombre: 'X (Twitter)', icono: 'bi-twitter-x' },
    { nombre: 'Instagram', icono: 'bi-instagram' },
    { nombre: 'LinkedIn', icono: 'bi-linkedin' },
    { nombre: 'YouTube', icono: 'bi-youtube' },
  ];
  constructor(
    private readonly sidebarStatusService: SidebarStatusService
  ) { }

  ngOnInit(): void {
    this.isActiveSidebar$ = this.sidebarStatusService.sidebarStatus$;
  }
  toggleSidebar(status: boolean): void {
    this.sidebarStatusService.changeStatus(status);
  }
}
