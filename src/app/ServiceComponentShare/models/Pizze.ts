export class Pizze{ //to make it accesible outside
    
    id:number;
    name:String;
    price:number;
    tags?:string[];
    favorite:boolean;
    stars:number;
    imageUrl:string;
    origins:String[] = [];
    cookTime:string = '';
    constructor(id:number,name:String,price:number,favorite:boolean,imageUrl:string,origins: String[], cookTime:string,stars:number,tags?:string[],){
        this.id = id;
        this.name = name;
        this.price = price;
        this.tags = tags;
        this.favorite = favorite;
        this.stars = stars;
        this.imageUrl = imageUrl;
        this.origins = origins;
        this.cookTime = cookTime;
    }
     // id!:number to make it mandatory instead of using constructor
}
