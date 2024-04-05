import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../ServiceComponentShare/models/User';
import { IUserLogin } from '../ServiceComponentShare/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../ServiceComponentShare/models/constants/urls';
import { ToastrService } from 'ngx-toastr';
import { IUserRegister } from '../ServiceComponentShare/interfaces/IUserRegister';


const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  //No one can read or write outside UserService  so we use Observable
  public userObservable:Observable<User>;
  constructor(private http:HttpClient, private toastrService:ToastrService) {
    this.userObservable = this.userSubject.asObservable();
   }
///////////////////////////////
//npm install ngx-toastr for visual result
//////////////////////////////////////////
///////////////////////////////
// add to styles of angular.json
// "styles": [
//   "src/styles.css",
//   "node_modules/ngx-toastr/toastr.css"
// ],
////////////////////////////////////////
login(userLogin:IUserLogin):Observable<User>{
       // htttp return an observable
     return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe( //.subscription return a Subscription so we PIPE
      tap({
        next:(user) =>{
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          
          this.toastrService.success(
            `Welcome to PizzaStore ${user.name}!`,
            'Login Successful'
          )
        },
        error:(errorResponse)=>{
          this.toastrService.error(errorResponse.error,'Login Failed');

        }
      })
     );  
      
   }
register(userRegister:IUserRegister):Observable<User>{
  return this.http.post<User>(USER_REGISTER_URL,userRegister).pipe(
    tap({
      next:(user) =>{
        this.setUserToLocalStorage(user);
        this.userSubject.next(user);
        this.toastrService.success(
          `Welcome to the best Pizza site ${user.name}`,
          'Register Successful'
        )
      },
      error:(errorResponse) =>{
        this.toastrService.error(errorResponse.error,
          'Register Failed')
      }
    
    })
  )
}

   //To keep the login when refresh LOCALSTORAGE
   private setUserToLocalStorage(user:User){
        localStorage.setItem(USER_KEY,JSON.stringify(user));
   }

   private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson) return JSON.parse(userJson) as User;
    return new User(); //if there's no value to localstorage
   }

   logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
   }

}
