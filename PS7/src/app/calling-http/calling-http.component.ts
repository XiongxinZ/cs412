import { Component, OnInit } from '@angular/core';
import {WxService} from '../services/wx.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-calling-http',
  templateUrl: './calling-http.component.html',
  styleUrls: ['./calling-http.component.css']
})
export class CallingHttpComponent implements OnInit {

  cityWeather = {
    key: 0,
    value: 0,
    cached: 0
  };

  city: string;
  cityControl2: FormControl = new FormControl('boston', Validators.required);
  weatherFormGroup = this.form.group({
    cityControl: ['boston', Validators.required],
    unitsControl: [''],
    subform: this.form.group({
      detail: ['']
    })
  });

  cityWeathers: any[];
  addCityWeather(): void {
    this.cityWeathers.concat(this.cityWeather);
  }

  constructor(private wxService: WxService, private form: FormBuilder) { }

  ngOnInit(): void {
  }

  getWeather(): void { // call a service to get the current data
    this.wxService.getWeather().subscribe(
      response => {
        console.log(`Response: ${response}`);
        this.cityWeather = response;
      });
  }

  getWeatherByCity(): void {
    this.wxService.getWeatherByCity(this.city).subscribe(
      response => {
        this.cityWeather = response;
        this.cityWeather = {
          key : response.key,
          value: response.value,
          cached: response.cached
        };
        console.log(`response looks like this: ${response}`);
      }
    );
  }

  getWeatherByCityWay2(): void {
    this.wxService.getWeatherByCity(this.cityControl2.value).subscribe(
      response => {
        this.cityWeather = response;
        this.cityWeather = {
          key : response.key,
          value: response.value,
          cached: response.cached
        };
        console.log(`response looks like this: ${response}`);
      }
    );
  }

  getWeatherByCityWay3(): void {
    this.wxService.getWeatherByFormGroup(this.weatherFormGroup).subscribe(
      response => {
        this.cityWeather = response;
        this.cityWeather = {
          key : response.key,
          value: response.value,
          cached: response.cached
        };
        console.log(`response looks like this: ${response}`);
      }
    );
  }
}
