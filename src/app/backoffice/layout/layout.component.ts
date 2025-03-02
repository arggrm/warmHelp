import { Component, OnInit } from '@angular/core';
import { HeaderBackofficeComponent } from '../header-backoffice/header-backoffice.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SidebarStatusService } from '../../services/status/sidebar-status.service';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-layout',
  imports: [
    HeaderBackofficeComponent,
    RouterOutlet,
    SidebarComponent,
    FooterComponent
],
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export default class LayoutBackComponent implements OnInit {

  isActiveSidebar: boolean = false;

  constructor(
    private readonly sidebarStatusService: SidebarStatusService
  ) { }
  ngOnInit():void {
    this.sidebarStatusService.sidebarStatus$.subscribe(valorProcedenteDelHeader => {
      this.isActiveSidebar = valorProcedenteDelHeader;
    })
  }
}
