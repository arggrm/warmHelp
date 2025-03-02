/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { registerChartJsModules } from './chart-config';

// Configuración de gráficos Chart.js 
registerChartJsModules();

// Inicialización de la aplicación Angular
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));  
