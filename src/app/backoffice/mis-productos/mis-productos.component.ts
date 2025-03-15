import { Component } from '@angular/core';
import { MisProductosStatusService } from '../../services/status/mis-productos-status.service';
import { Subscription } from 'rxjs';
import { EditarProductoComponent } from "./editar-producto/editar-producto.component";
import { NgIf } from '@angular/common';
import { CrearProductoComponent } from "./crear-producto/crear-producto.component";
import { MisProductosStatus } from '../../services/interfaces/product';

@Component({
  selector: 'app-mis-productos',
  imports: [EditarProductoComponent, NgIf, CrearProductoComponent],
  templateUrl: './mis-productos.component.html',
  styleUrl: './mis-productos.component.scss'
})
export class MisProductosComponent {

  private subscription: Subscription | undefined;

  isActiveItems: MisProductosStatus = {
    isActiveToggleEditProduct: false,
    isActiveToggleCreateProduct: false
  };

  constructor(
    private readonly misProductosStatusService: MisProductosStatusService,
  ) { }


  ngOnInit(): void {
    this.subscription = this.misProductosStatusService.misProductosStatus$.subscribe((status) => {
      this.isActiveItems = status;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toggleItem(option: keyof MisProductosStatus): void {
    this.misProductosStatusService.toggleItem(option);
  }

}
