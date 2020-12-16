import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
// import {wxConfig} from '../config/wxConfig';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class WxService {

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    const body = new HttpParams()
      .set('city', 'boston');

    return this.http.post('http://localhost:3000',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }

  getWeatherByCity(city: string): Observable<any> {
    // return this.http.get(wxConfig.baseURL + city + '&units=' + units + '&appid=' + wxConfig.apiKey);
    const body = new HttpParams()
      .set('city', city);

    return this.http.post('http://localhost:3000',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }

  getWeatherByFormGroup(form: FormGroup): Observable<any> {
    console.log(`in getWeatherByCity `);
    const city = form.value.cityControl;
    const body = new HttpParams()
      .set('city', city);

    return this.http.post('http://localhost:3000',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }
}
