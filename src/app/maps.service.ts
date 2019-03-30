import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location {
  latitude: string;
  longitude: string;
  country_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor( private http: HttpClient ) { }

  getLocation() {
    return this.http.get<Location>('http://api.ipapi.com/api/161.185.160.93?access_key=');
  }
}
