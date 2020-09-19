import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, PositionType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { chartColors } from './../../chart.conf';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left'
    }
  };
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [...chartColors];

  @Input() title!: string;
  @Input() pieChartLabels: Label[] = [];
  @Input() pieChartData: SingleDataSet = [];
  @Input() legendPosition!: PositionType;

  constructor() { }

  ngOnInit(): void {
  }

}
