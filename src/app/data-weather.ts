export class DataWeather {
  public country: string;
  public city: string;
  public temperature: string;
  public wind: number;
  public preciptation: string;
  public umidity: number;
  public description: string;
  public icon: any;  
  public code: any;

  constructor(
    country: string,
    city: string,
    temperature: string,
    wind: number,
    preciptation: string,
    umidity: number,
    description: string,
    icon:any,
    code:any,
  ) {
    this.country = country;
    this.city = city;
    this.temperature = temperature;
    this.wind = wind;
    this.preciptation = preciptation;
    this.umidity = umidity;
    this.description = description;
    this.icon = icon;
    this.code = code
    }
}
