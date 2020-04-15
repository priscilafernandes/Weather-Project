import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color,Label } from "ng2-charts";

@Component({
  selector: 'grapich-today',
  templateUrl: './grapich-today.component.html',
  styleUrls: ['./grapich-today.component.css']
})
export class GrapichTodayComponent implements OnInit {

  lineChartData: ChartDataSets[] = [
    { data: [85,72,78,100, 90], label: 'Temperatura Hoje'}
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive:true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';



  constructor() { }

  ngOnInit(): void {
  }

}