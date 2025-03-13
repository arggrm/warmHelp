import { Routes } from '@angular/router';

import { LayoutComponent } from './cliente/layout/layout.component';
import LayoutBackComponent from './backoffice/layout/layout.component';

import { HomeComponent } from './cliente/home/home.component';
import { LoginComponent } from './cliente/login/login.component';
import { RegistroComponent } from './cliente/registro/registro.component';
import { TiendaComponent } from './cliente/tienda/tienda.component';
import { ControlPanelComponent } from './backoffice/control-panel/control-panel.component';
import { ProfileComponent } from './backoffice/profile/profile.component';
import { EditProfileComponent } from './backoffice/edit-profile/edit-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './services/guards/auth.guard';
import { publicGuard } from './services/guards/public.guard';
import { SuccessRegisterComponent } from './cliente/success-register/success-register.component';
import { MisProductosComponent } from './backoffice/mis-productos/mis-productos.component';

// Rutas de Cliente
const clientRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent, canActivate: [publicGuard] },
  { path: "register", component: RegistroComponent, canActivate: [publicGuard] },
  { path: "success-register", component: SuccessRegisterComponent },
  { path: "tienda", component: TiendaComponent },
];

// Rutas de Backoffice
const backofficeRoutes: Routes = [
  { path: "", redirectTo: "control-panel", pathMatch: "full" },
  { path: "control-panel", component: ControlPanelComponent },
  { path: "profile", component: ProfileComponent },
  { path: "edit-profile", component: EditProfileComponent },
  { path: "my-products", component: MisProductosComponent },
];

// Rutas principales
export const routes: Routes = [
  // Cliente
  {
    path: "",
    component: LayoutComponent,
    children: clientRoutes
  },

  // Backoffice
  {
    path: "app",
    canActivate: [authGuard],
    component: LayoutBackComponent,
    children: backofficeRoutes,
  },

  // Página no encontrada
  { path: "**", component: PageNotFoundComponent }
];
