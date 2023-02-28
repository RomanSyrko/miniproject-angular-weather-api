import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

import {ApiService} from "./services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public weatherSearchForm: FormGroup;
  public weatherCurrentData: any;
  public weatherForecastData: any;
  toggle: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private apiXuService: ApiService
  ) {
    this.weatherSearchForm = this.formBuilder.group({location: ['']});
  }

  sendToAPI(formValues: any) {
    this.apiXuService.getCurrentWeather(formValues.location)
      .subscribe(data => {
        this.weatherCurrentData = data;
      });
    this.apiXuService.getForecastWeather(formValues.location)
      .subscribe(data => {
        this.weatherForecastData = data
      })
  }

  clickEvent() {
    this.toggle = !this.toggle;
  }
}
