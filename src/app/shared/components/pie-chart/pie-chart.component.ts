import { AfterViewInit, Component, Input } from '@angular/core';
import { ChartOptions, ChartType, PositionType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartColors, chartColors1, chartColors2, chartColors3 } from './../../chart.conf';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements AfterViewInit {

  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontFamily: 'Ubuntu'
      },
      position: 'left'
    }
  };
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartColors: ChartColors[] = [];

  @Input() title!: string;
  @Input() pieChartLabels: Label[] = [];
  @Input() pieChartData: SingleDataSet = [];
  @Input() legendPosition!: PositionType;
  @Input() colorOption!: number;

  constructor() { }

  ngAfterViewInit(): void {
    this.setChartColors();
  }

  setChartColors(): void {
    switch (this.colorOption) {
      case 1:
        this.pieChartColors.push(chartColors1);
        break;
      case 2:
        this.pieChartColors.push(chartColors2);
        break;
      case 3:
        this.pieChartColors.push(chartColors3);
        break;
      default:
        this.pieChartColors.push(chartColors1);
        break;
    }
  }

}
