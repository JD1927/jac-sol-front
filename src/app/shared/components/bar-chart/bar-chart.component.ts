import { AfterViewInit, Component, Input } from '@angular/core';
import { ChartOptions, ChartType, PositionType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartColors, chartColors1, chartColors2, chartColors3 } from '../../chart.conf';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements AfterViewInit {

  barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontFamily: 'Ubuntu'
      },
      position: 'top'
    }
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartColors: ChartColors[] = [];

  @Input() title!: string;
  @Input() barChartLabels: Label[] = [];
  @Input() barChartData: SingleDataSet = [];
  @Input() legendPosition!: PositionType;
  @Input() colorOption!: number;

  constructor() { }

  ngAfterViewInit(): void {
    this.setChartColors();
  }

  setChartColors(): void {
    switch (this.colorOption) {
      case 1:
        this.barChartColors.push(chartColors1);
        break;
      case 2:
        this.barChartColors.push(chartColors2);
        break;
      case 3:
        this.barChartColors.push(chartColors3);
        break;
      default:
        this.barChartColors.push(chartColors1);
        break;
    }
  }

}
