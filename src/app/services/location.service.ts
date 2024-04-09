import { Injectable } from '@angular/core';
import { LatLngLiteral } from 'leaflet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getCurrentLocation():Observable<LatLngLiteral>{
    //We use JAVASCRIPT geolocation and coord  AND WRAPPING IT WITH AN OBSERVABLE FOR ANGULAR
    //When anything change inside the method, the observer inform the observable object
    //you can also do with BEHAVIORSUBJECT but its good only when you want to change the value inside different methods
    return new Observable((observer)=>{
      if(!navigator.geolocation) return;

      return navigator.geolocation.getCurrentPosition(
        (pos) => {observer.next(
          {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          }
        )},
        (error) => {
          observer.error(error);
        }
      )
    })
  }
}
