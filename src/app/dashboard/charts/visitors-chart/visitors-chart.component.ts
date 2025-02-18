import { Component } from '@angular/core';
import { KENDO_CHARTS, Legend, SeriesType } from '@progress/kendo-angular-charts';

@Component({
  selector: 'app-visitors-chart',
  imports: [
    KENDO_CHARTS
  ],
  templateUrl: './visitors-chart.component.html',
  styleUrl: './visitors-chart.component.scss'
})
export class VisitorsChartComponent {
  public chartConfig = {
    series: [
      {
        type: <SeriesType>"donut",
        field: "value",
        categoryField: "type",
        startAngle: 70,
        holeSize: 30,
        data: [
          { value: 70, type: "New" },
          { value: 30, type: "Returning" },
        ],
      },
    ],
    legend: <Legend>{
      position: "bottom",
    },
  };
}
