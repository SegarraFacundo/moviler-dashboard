import { Component } from '@angular/core';
import { ConversionChartComponent } from './charts/conversion-chart/conversion-chart.component';
import { MostVisitedChartComponent } from './charts/most-visited-chart/most-visited-chart.component';
import { PageViewsChartComponent } from './charts/page-views-chart/page-views-chart.component';
import { VisitorsChartComponent } from './charts/visitors-chart/visitors-chart.component';
import { KENDO_TILELAYOUT } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-dashboard',
  imports: [
    KENDO_TILELAYOUT,
    ConversionChartComponent,
    MostVisitedChartComponent,
    PageViewsChartComponent,
    VisitorsChartComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
