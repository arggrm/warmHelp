import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-visits-graphic',
  imports: [BaseChartDirective],
  templateUrl: './visits-graphic.component.html',
  styleUrls: ['./visits-graphic.component.scss']
})
export class VisitsGraphicComponent implements OnInit {

  public doughnutChartOptions: ChartConfiguration['options'] = this.getDoughnutChartOptions();
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: { labels: string[], datasets: ChartDataset<'doughnut'>[] } = this.getInitialDoughnutChartData();
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {
    this.setChartData();
  }

  private getDoughnutChartOptions(): ChartConfiguration['options'] {
    return {
      responsive: true, // Línea obligatoria
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
          text: "Visit by Traffic Types"
        }
      }
    };
  }

  private getInitialDoughnutChartData(): { labels: string[], datasets: ChartDataset<'doughnut'>[] } {
    return {
      labels: [],
      datasets: [{
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: [],
        borderWidth: 0,
      }]
    };
  }

  private setChartData(): void {
    const labels = this.getChartLabels();
    const data = this.getChartData();
    const colors = this.getChartColors();

    this.doughnutChartLabels = labels;
    this.doughnutChartData.labels = labels;
    const datasets = this.doughnutChartData.datasets[0];
    datasets.data = data;
    datasets.backgroundColor = colors;
    datasets.hoverBackgroundColor = colors;
  }

  private getChartLabels(): string[] {
    return ['Organic', 'Referral', 'Others'];
  }

  private getChartData(): number[] {
    return [200, 50, 250];
  }

  private getChartColors(): string[] {
    return ['#0077cc', '#ffd900', '#f9461b'];
  }

}
