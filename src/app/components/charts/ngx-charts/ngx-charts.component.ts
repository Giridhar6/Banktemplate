import { Component, OnInit } from '@angular/core';
import {single, multi} from './data';
@Component({
  selector: 'app-ngx-charts',
  templateUrl: './ngx-charts.component.html',
  styleUrls: ['./ngx-charts.component.css']
})
export class NgxChartsComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [900, 500];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Month';
  showYAxisLabel = true;
  yAxisLabel = 'Amount';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  constructor() {
    Object.assign(this, {single, multi});
  }
  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
