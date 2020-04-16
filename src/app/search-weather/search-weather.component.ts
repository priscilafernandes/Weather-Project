import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';

@Component({
  selector: 'search-weather',
  templateUrl: './search-weather.component.html',
  styleUrls: ['./search-weather.component.css']
})

export class SearchWeatherComponent implements OnInit {
  inputSearch: any;
  apiDates;
  //*minhas variaveis para manipulacao dos elementos da API
  codigoPais;
  velocidadeVento;
  // precip;
  temperatura;
  umidade;
  nomeCidade;
  constructor(private service: ServiceApiService) { }

  ngOnInit() { }

  getInputZip(event) {
    this.inputSearch = event.target.value;

    this.service.getApiDate(this.inputSearch).subscribe((result) => {
      this.apiDates = new Object(result);
      this.codigoPais = this.apiDates.data[0].country_code
      this.nomeCidade = this.apiDates.data[0].city_name
      this.temperatura = this.apiDates.data[0].temp
      this.velocidadeVento = this.apiDates.data[0].wind_spd
      // this.precip = this.apiDates.data[0].precip
      this.umidade = this.apiDates.data[0].rh

      console.log(`Pais de Origem: ${this.codigoPais}`);
      console.log(`Cidade Atual: ${this.nomeCidade}`);
      console.log(`Temperatura Atual: ${this.temperatura}°C`);
      console.log(`Velocidade do Vento: ${this.velocidadeVento}km`);//*necessario verificar como tratar os dados de velocidade do vento
      // console.log(`Probabilidade de chuva: ${this.precip}`); //*Verificar qual dado da API esta usando esta propriedade
      console.log(`Umidade Atual: ${this.umidade}%`);
      console.log(this.apiDates);
    })

  }

}
