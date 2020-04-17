import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';
import { DataWeather } from "../data-weather";

@Component({
  selector: 'search-weather',
  templateUrl: './search-weather.component.html',
  styleUrls: ['./search-weather.component.css']
})

export class SearchWeatherComponent implements OnInit {
  inputSearch: any;
  apiData: any;
  model: DataWeather[];
  response: any

  constructor(private service: ServiceApiService) { }

  ngOnInit() { }

  getInputZip(event) {
    this.inputSearch = String(event.target.value);

    this.service.getApiData(this.inputSearch).subscribe((result) => {
      this.apiData = result;
      let apiResult = this.apiData.data[0]

      this.response = new DataWeather(
        apiResult.country_code,
        apiResult.city_name,
        apiResult.temp,
        apiResult.wind_spd,
        apiResult.precip,
        apiResult.rh
      )

      console.log(this.response);
    });
  }

}
