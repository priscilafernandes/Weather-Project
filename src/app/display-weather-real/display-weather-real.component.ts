import { Component, OnInit, Input } from '@angular/core';
import { ServiceApiService } from "../service-api.service";
import { DataWeather } from "../data-weather";

@Component({
  selector: 'display-weather-real',
  templateUrl: './display-weather-real.component.html',
  styleUrls: ['./display-weather-real.component.css']
})
export class DisplayWeatherRealComponent implements OnInit {

  constructor(private response: ServiceApiService) { }

  @Input () responses: any;

  ngOnInit(): void {

  }

}
