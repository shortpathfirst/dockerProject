import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LatLng, LatLngTuple, Map,map,icon, tileLayer, Marker, marker, LatLngExpression, LeafletMouseEvent } from 'leaflet';
import { LocationService } from '../../../services/location.service';
import { CommonModule } from '@angular/common';
import { Order } from '../../../ServiceComponentShare/models/Order';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  @Input()
  order!:Order;
  private readonly MARKER_ZOOM_LEVEL = 16;
  //Substitute leaflet icon
  private readonly MARKER_ICON = icon({ 
    iconUrl:
      'https://res.cloudinary.com/foodmine/image/upload/v1638842791/map/marker_kbua9q.png',
    iconSize: [42, 42],
    iconAnchor: [21, 42],
  });
  private readonly DEFAULT_LATLNG:LatLngTuple= [13.75,21.62];
 
  //select a tag and put inside the field
//{static:true} make it aviable inside ngOnInit static because there's not dinamic ngFor ecc..
@ViewChild('map',{static:true}) 
mapRef!:ElementRef;

map!:Map; //leaflet
currentMarker!:Marker;

constructor(private locationService:LocationService){}

ngOnInit(): void {
  this.initializeMap();
}
initializeMap(){
  if(this.map) return;

  this.map = map(this.mapRef.nativeElement,{
    attributionControl: false
  }).setView(this.DEFAULT_LATLNG,1);
  tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
  this.map.on('click',(e:LeafletMouseEvent)=>{
    this.setMarker(e.latlng);
  })

}
findMyLocation() {
  this.locationService.getCurrentLocation().subscribe({
    next:(latlng) =>{
      this.map.setView(latlng, this.MARKER_ZOOM_LEVEL);
      this.setMarker(latlng);
    }
  })
}
setMarker(latlng:LatLngExpression){ //check definition it can be LatLng
  this.addressLatLng = latlng as LatLng;
  
  if(this.currentMarker){
      this.currentMarker.setLatLng(latlng);
      return;
    }
    this.currentMarker = marker(latlng,{
      draggable:true,
      icon: this.MARKER_ICON
    }).addTo(this.map)
    
    this.currentMarker.on('dragend',()=>{ //call this callback
      this.addressLatLng = this.currentMarker.getLatLng();
    })
}

//For mongodb since it can't parse float with more than 8 points
set addressLatLng(latlng:LatLng){
  latlng.lat = parseFloat(latlng.lat.toFixed(8));
  latlng.lat = parseFloat(latlng.lat.toFixed(8));
  this.order.addressLatLng = latlng;
  console.log(this.order.addressLatLng);
}

}
