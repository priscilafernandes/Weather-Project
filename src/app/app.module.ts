import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
// Import Form Control
import { FormsModule } from "@angular/forms";
// Import Charts Module

import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { DisplayWeatherRealComponent } from './display-weather-real/display-weather-real.component';
import { SearchWeatherComponent } from './search-weather/search-weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GrapichTodayComponent } from './grapich-today/grapich-today.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
