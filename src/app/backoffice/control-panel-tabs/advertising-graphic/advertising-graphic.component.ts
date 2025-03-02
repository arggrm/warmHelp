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
          position: 'top',
        },
        title: {
          display: false,
          text: 'Monthly Cases'
        }
      },
      scales: {
        y: { stacked: true, beginAtZero: true },
        x: { stacked: true, },
      }
    }
  }

  private getBarChartLabels(): string[] {
    return ['January', 'February', 'March', 'April', 'May', 'June'];
  }

  private getBarChartData(): ChartConfiguration['data'] {
    return {
      labels: this.barChartLabels,
      datasets: [
        { data: [30, 50, 40, 70, 90, 60], label: 'Active', backgroundColor: '#f9461b' },
        { data: [20, 30, 50, 60, 80, 40], label: 'Closed', backgroundColor: '#73cb16' },
        { data: [10, 40, 30, 50, 70, 50], label: 'Hold', backgroundColor: '#9800e5' }
      ]
    };
  }

}