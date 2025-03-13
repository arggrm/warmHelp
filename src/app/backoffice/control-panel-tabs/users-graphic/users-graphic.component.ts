import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-users-graphic',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './users-graphic.component.html',
  styleUrls: ['./users-graphic.component.scss']
})
export class UsersGraphicComponent implements OnInit {

  public lineChartData!: ChartConfiguration['data'];
  public lineChartOptions: ChartConfiguration['options'] = this.getLineChartOptions();
  public lineChartType: ChartType = 'line';

  constructor() { }

  ngOnInit(): void {
    this.setChartData();
  }

  private getLineChartOptions(): ChartConfiguration['options'] {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { 
          display: true, 
          position: 'bottom', 
          labels: { color: '#ecf4ff' } 
        },
        title: { display: false, text: 'Ventas Mensuales' }
      },
      scales: {
        x: {
          grid: { display: true, color: '#456ca3' },
          ticks: { color: '#456ca3' }
        },
        y: {
          beginAtZero: true,
          grid: { color: '#456ca3' },
          ticks: { color: '#456ca3' }
        }
      }
    };
  }

  private setChartData(): void {
    const labels = this.getChartLabels();

    this.lineChartData = {
      labels: labels,
      datasets: this.getChartDatasets()
    };
  }

  private getChartLabels(): string[] {
    return ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];
  }

  private getChartDatasets(): any[] {
    return [
      {
        label: 'Android',
        data: [20, 98, 120, 112, 168, 140],
        fill: false,
        borderColor: '#f9461b',
        backgroundColor: '#f9461b',
        tension: 0.1,
        borderWidth: 5
      },
      {
        label: 'iOS',
        data: [10, 110, 130, 115, 165, 150],
        fill: false,
        borderColor: '#0077cc',
        backgroundColor: '#0077cc',
        tension: 0.1,
        borderWidth: 5
      },
      {
        label: 'PC',
        data: [30, 105, 143, 121, 184, 161],
        fill: false,
        borderColor: '#9800e5',
        backgroundColor: '#9800e5',
        tension: 0.1,
        borderWidth: 5
      }
    ];
  }
}
