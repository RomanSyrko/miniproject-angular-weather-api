import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {IForecast} from "../interfaces/IForecast";
import {ICurrent} from "../interfaces/ICurrent";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiKey = 'b97cfa5f31ae477e8be191208232602'

  constructor(private http: HttpClient) {}

  getCurrentWeather(location: string) {
    return this.http.get<ICurrent[]>(`https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${location}&aqi=no`);
  }
  getForecastWeather(location: string){
    return this.http.get<IForecast[]>(`https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${location}&days=6&aqi=no&alerts=no\n`)
  }
}
