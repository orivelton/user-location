import { Component } from '@angular/core';
import { MapsService } from './maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lat: string = '';
  lng: string = '';
  title: string = '';

  location: Object;

  constructor(private map: MapsService) {}

  ngOnInit() {
    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.longitude;
      this.lng = data.longitude;
      this.title = data.country_name;
    });
  }



}
