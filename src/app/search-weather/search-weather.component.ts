import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';
import { DataWeather } from "../data-weather";

@Component({
  selector: 'search-weather',
  templateUrl: './search-weather.component.html',
  styleUrls: ['./search-weather.component.css']
})

export class SearchWeatherComponent implements OnInit {
  apiDates;
  inputSearch: any;

  dataWeather: any

  constructor(private service:ServiceApiService) { }

  ngOnInit() {

  }

  getInputZip(event){
    this.inputSearch = event.target.value;

    this.service.getApiDate(this.inputSearch).subscribe((result) => {
      this.apiDates = new Object(result);

      // this.dataWeather = new DataWeather(result);

      console.log(this.apiDates);
      console.log(this.dataWeather);
    })

  }

}
