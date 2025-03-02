import { Chart, ArcElement, BarController, BarElement, CategoryScale, DoughnutController, Legend, LinearScale, LineController, LineElement, PieController, PointElement, Title, Tooltip } from 'chart.js';

export function registerChartJsModules(): void {
    Chart.register(
        BarController, BarElement, CategoryScale, LinearScale,  // Barras
        LineController, PointElement, LineElement, Title, Tooltip, Legend, // Líneas
        ArcElement, PieController, DoughnutController // Pastel/Dona
    );
}