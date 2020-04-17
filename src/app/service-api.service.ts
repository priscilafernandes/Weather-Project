import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiceApiService {

  weatherApi: string = "https://api.weatherbit.io/v2.0/current?city=";
  key: string = "4c6b53bd14e84267b6e70da5b3e6d08d"

  constructor(private http: HttpClient) { }

  getApiData(zipcode: string) {
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

    return this.http.get(`${this.weatherApi}${zipcode}&country=BR&lang=pt&key=${this.key}`, { 'headers': headers });
  }
}
