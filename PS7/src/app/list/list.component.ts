import {Component, OnInit} from '@angular/core';
import {weathers} from '../data/weatherMOCK';
import {Weather} from '../data/Weather';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  weathers: Weather[] = weathers;
  weather: Weather;
  selectedWeather: Weather;

  constructor() {
  }

  ngOnInit(): void {
  }

  setSelectedWeather(weather: Weather): void {
    this.selectedWeather = weather;
    console.log(`${weather.name}`);

  }
}
