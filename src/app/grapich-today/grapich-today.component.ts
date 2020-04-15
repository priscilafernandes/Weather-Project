import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from "ng2-charts";

@Component({
  selector: 'grapich-today',
  templateUrl: './grapich-today.component.html',
  styleUrls: ['./grapich-today.component.css']
})
export class GrapichTodayComponent implements OnInit {

  lineChartData: ChartDataSets[] = [
    { data: [25, 22, 19, 20, 18, 27, 21], label: 'Temperatura da Semana' },
  ];

  lineChartLabels: Label[] = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#1483b7',
    },
  ];

  lineChartLegend = true;
  lineChartShowLines = false;
  lineChartPlugins = [];
  lineChartType = 'line'



  constructor() { }

  ngOnInit(): void {
  }

}
