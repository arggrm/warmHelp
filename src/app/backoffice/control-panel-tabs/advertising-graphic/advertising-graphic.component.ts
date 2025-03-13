import { Component } from '@angular/core';
import { ChartType, ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-advertising-graphic',
  imports: [BaseChartDirective],
  templateUrl: './advertising-graphic.component.html',
  styleUrl: './advertising-graphic.component.scss'
})
export class AdvertisingGraphicComponent {

  public barChartOptions: ChartConfiguration['options'] = this.getBarChartOptions();

  public barChartLabels: string[] = this.getBarChartLabels();

  public barChartData: ChartConfiguration['data'] = this.getBarChartData();

  public barChartType: ChartType = 'bar';

  private getBarChartOptions(): ChartConfiguration['options'] {
    return {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          stacked: true, beginAtZero: true, grid: {
            color: '#456ca3'
          },
          ticks: {
            color: '#456ca3'
          }
        },
        x: {
          stacked: true, grid: {
            color: '#456ca3'
          },
          ticks: {
            color: '#456ca3'
          }
        },
      }
    }
  }

  private getBarChartLabels(): string[] {
    return ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
  }

  private getBarChartData(): ChartConfiguration['data'] {
    return {
      labels: this.barChartLabels,
      datasets: [
        { data: [30, 50, 40, 70, 90, 60], label: 'Active', backgroundColor: '#004a80', borderColor: '#0077cc', borderWidth: 1 },
        { data: [20, 30, 50, 60, 80, 40], label: 'Closed', backgroundColor: '#710400', borderColor: '#c60700', borderWidth: 1 },
        { data: [10, 40, 30, 50, 70, 50], label: 'Hold', backgroundColor: '#3c4b5d', borderColor: '#7a94b9', borderWidth: 1 }
      ]
    };
  }

}