import {Component, OnInit} from '@angular/core';
import {weathers} from '../data/weatherMOCK';
import {Weather} from '../data/Weather';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  headers = ['ID', 'City', 'Celsius(ºC)', 'Fahrenheit(ºF)', 'Weather'];
  attributes = ['id', 'name', 'celsius', 'fahrenheit', 'description'];
  weathers: Weather[] = weathers;

  isShow = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

}
