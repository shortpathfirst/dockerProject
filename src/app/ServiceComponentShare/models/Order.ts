
import { LatLng } from "leaflet";
import { CartItem } from "./CartItem";
import { User } from "./User";

export class Order{
    id!:number;
    items!:CartItem[]; //not set new Cart but copy it
    totalPrice!:number;
    name!:string;
    address!:string;
    addressLatLng?:LatLng // lat and long of the position
    paymentId!:string;
    createdAt!:string;
    status!:string;//payed, in corso,ecc
}