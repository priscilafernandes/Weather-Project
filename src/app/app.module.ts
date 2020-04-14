import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import Form Control
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { DisplayWeatherRealComponent } from './display-weather-real/display-weather-real.component';
import { SearchWeatherComponent } from './search-weather/search-weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DisplayWeatherRealComponent,
    SearchWeatherComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
