import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { DisplayWeatherRealComponent } from './display-weather-real/display-weather-real.component';
import { SearchWeatherComponent } from './search-weather/search-weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GrapichTodayComponent } from './grapich-today/grapich-today.component';

import { ServiceApiService } from "./service-api.service";

@NgModule({
  declarations: [
    AppComponent,
    DisplayWeatherRealComponent,
    SearchWeatherComponent,
    GrapichTodayComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,

  ],
  providers: [ServiceApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
