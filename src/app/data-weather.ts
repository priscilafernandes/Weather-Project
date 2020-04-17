export class DataWeather {
  public country: string;
  public city: string;
  public temperature: number;
  public wind: number;
  public preciptation: number;
  public umidity: number;

  constructor(
    country: string,
    city: string,
    temperature: number,
    wind: number,
    preciptation: number,
    umidity: number
  ) {
    this.country = country;
    this.city = city;
    this.temperature = temperature;
    this.wind = wind;
    this.preciptation = preciptation;
    this.umidity = umidity;
  }
}
