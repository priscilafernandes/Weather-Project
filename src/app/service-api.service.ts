import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  weatherApi: string = "https://api.weatherbit.io/v2.0/current?postal_code=";

  constructor(private http: HttpClient) { }

  getApiDate(zipcode) {
    return this.http.get(this.weatherApi + zipcode + "&country=BR&lang=pt&city=S%C3%A3o%20Paulo&key=4c6b53bd14e84267b6e70da5b3e6d08d");
  }
}
