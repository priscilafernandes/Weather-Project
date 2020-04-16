import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';

@Component({
  selector: 'search-weather',
  templateUrl: './search-weather.component.html',
  styleUrls: ['./search-weather.component.css']
})

export class SearchWeatherComponent implements OnInit {
  apiDates;
  inputSearch:any;

  constructor(private service:ServiceApiService) { }

  ngOnInit() {}

  getInputZip(event){
    this.inputSearch = event.target.value;

    this.service.getApiDate(this.inputSearch).subscribe((result) => {
      this.apiDates = new Object(result);
      console.log(this.apiDates);
    })

  }

}
