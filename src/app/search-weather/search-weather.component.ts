import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-weather',
  templateUrl: './search-weather.component.html',
  styleUrls: ['./search-weather.component.css']
})
export class SearchWeatherComponent implements OnInit {

  inputSearch:any;

  constructor() { }

  ngOnInit(): void {
  }

  getInputZip(event){
    this.inputSearch = event.target.value;
   
  }

}
